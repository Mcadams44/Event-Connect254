from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
import os
from datetime import datetime, timedelta

app = Flask(__name__)
UPLOAD_FOLDER = os.path.join(app.root_path, 'static', 'uploads')
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///eventconnect.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your-secret-key-change-in-production'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=24)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

db = SQLAlchemy(app)
jwt = JWTManager(app)
CORS(app)

# Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    user_type = db.Column(db.String(20), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    bookings = db.relationship('Booking', backref='client', lazy=True, foreign_keys='Booking.client_id')
    services = db.relationship('Service', backref='professional', lazy=True)
    professional_profile = db.relationship('ProfessionalProfile', backref='user', uselist=False)

class ProfessionalProfile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    specialty = db.Column(db.String(100))
    location = db.Column(db.String(100))
    phone = db.Column(db.String(20))
    bio = db.Column(db.Text)
    pricing = db.Column(db.String(100))
    profile_image = db.Column(db.String(255), default='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face')
    setup_complete = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    portfolios = db.relationship('Portfolio', backref='professional_profile', lazy=True, cascade='all, delete-orphan')

class Portfolio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    professional_profile_id = db.Column(db.Integer, db.ForeignKey('professional_profile.id'), nullable=False)
    title = db.Column(db.String(100))
    description = db.Column(db.Text)
    image_path = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    category = db.Column(db.String(50), nullable=False)
    professional_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'), nullable=False)
    event_date = db.Column(db.DateTime, nullable=False)
    status = db.Column(db.String(20), default='pending')
    rating = db.Column(db.Integer)
    review = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    service = db.relationship('Service', backref='bookings')

# Routes
@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()

    if User.query.filter_by(email=data['email']).first():
        return jsonify({'message': 'Email already exists'}), 400

    user = User(
        email=data['email'],
        password_hash=generate_password_hash(data['password']),
        name=data['name'],
        user_type=data['user_type']
    )

    db.session.add(user)
    db.session.commit()

    access_token = create_access_token(identity=user.id)
    return jsonify({'access_token': access_token, 'user': {'id': user.id, 'name': user.name, 'email': user.email}}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()

    if user and check_password_hash(user.password_hash, data['password']):
        access_token = create_access_token(identity=user.id)
        return jsonify({'access_token': access_token, 'user': {'id': user.id, 'name': user.name, 'email': user.email}}), 200

    return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/api/services', methods=['GET', 'POST'])
@jwt_required()
def services():
    if request.method == 'GET':
        services = Service.query.all()
        return jsonify([{
            'id': s.id, 'name': s.name, 'description': s.description,
            'price': s.price, 'category': s.category, 'professional_id': s.professional_id
        } for s in services])

    elif request.method == 'POST':
        data = request.get_json()
        service = Service(
            name=data['name'],
            description=data['description'],
            price=data['price'],
            category=data['category'],
            professional_id=get_jwt_identity()
        )
        db.session.add(service)
        db.session.commit()
        return jsonify({'message': 'Service created', 'id': service.id}), 201

@app.route('/api/categories', methods=['GET'])
def get_categories():
    # Return all available categories
    categories = [
        {'id': 'photographer', 'name': 'Photographer'},
        {'id': 'videographer', 'name': 'Videographer'},
        {'id': 'dj', 'name': 'DJ'},
        {'id': 'event planner', 'name': 'Event Planner'},
        {'id': 'caterer', 'name': 'Caterer'},
        {'id': 'decorator', 'name': 'Decorator'},
        {'id': 'venue coordinator', 'name': 'Venue Coordinator'}
    ]

    return jsonify(categories)

@app.route('/api/services/<int:service_id>', methods=['GET', 'PATCH', 'DELETE'])
@jwt_required()
def service_detail(service_id):
    service = Service.query.get_or_404(service_id)

    if request.method == 'GET':
        return jsonify({
            'id': service.id, 'name': service.name, 'description': service.description,
            'price': service.price, 'category': service.category
        })

    elif request.method == 'PATCH':
        data = request.get_json()
        service.name = data.get('name', service.name)
        service.description = data.get('description', service.description)
        service.price = data.get('price', service.price)
        service.category = data.get('category', service.category)
        db.session.commit()
        return jsonify({'message': 'Service updated'})

    elif request.method == 'DELETE':
        db.session.delete(service)
        db.session.commit()
        return jsonify({'message': 'Service deleted'}), 204

@app.route('/api/professionals', methods=['GET'])
def get_professionals():
    professionals = db.session.query(User, ProfessionalProfile).join(
        ProfessionalProfile, User.id == ProfessionalProfile.user_id, isouter=True
    ).filter(User.user_type == 'professional').all()

    result = []
    for user, profile in professionals:
        # Add sample data for existing users without profiles
        if not profile and user.name in ['Kinara', 'Nathan']:
            sample_data = {
                'Kinara': {'category': 'photographer', 'location': 'New York, NY', 'phone': '+1-555-0123', 'pricing': '$150/hour'},
                'Nathan': {'category': 'videographer', 'location': 'Los Angeles, CA', 'phone': '+1-555-0456', 'pricing': '$200/hour'}
            }
            data = sample_data.get(user.name, {})
            result.append({
                'id': user.id,
                'name': user.name,
                'email': user.email,
                'category': data.get('category', 'general'),
                'specialty': data.get('category', 'Event Professional').title(),
                'location': data.get('location', 'Location not specified'),
                'phone': data.get('phone'),
                'bio': f'Professional {data.get("category", "event")} service provider',
                'pricing': data.get('pricing', 'Contact for pricing'),
                'rating': 4.5,
                'reviews': 25,
                'verified': True,
                'portfolio': [],
                'image': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
            })
        else:
            # Only show professionals who have completed their setup
            if profile and profile.setup_complete:
                portfolio_items = []
                if hasattr(profile, 'portfolios'):
                    for p in profile.portfolios:
                        portfolio_items.append({
                            'id': p.id,
                            'title': p.title,
                            'description': p.description,
                            'image_url': f'/static/uploads/{p.image_path}'
                        })
                result.append({
                    'id': user.id,
                    'name': user.name,
                    'email': user.email,
                    'category': profile.category,
                    'specialty': profile.specialty or profile.category.title(),
                    'location': profile.location,
                    'phone': profile.phone,
                    'bio': profile.bio,
                    'pricing': profile.pricing,
                    'rating': 4.5,
                    'reviews': 25,
                    'verified': True,
                    'portfolio': portfolio_items,
                    'image': profile.profile_image or 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
                })
    # Add sample professionals for all categories
    if len([r for r in result if r.get('verified')]) < 5:
        sample_professionals = [
            {'id': 101, 'name': 'Sarah Johnson', 'email': 'sarah@example.com', 'category': 'photographer', 'specialty': 'Wedding Photography', 'location': 'Miami, FL', 'phone': '+1-555-0789', 'pricing': '$180/hour', 'bio': 'Award-winning wedding and event photographer'},
            {'id': 102, 'name': 'Mike Chen', 'email': 'mike@example.com', 'category': 'dj', 'specialty': 'Wedding DJ', 'location': 'Chicago, IL', 'phone': '+1-555-0234', 'pricing': '$300/event', 'bio': 'Professional DJ specializing in weddings and corporate events'},
            {'id': 103, 'name': 'Lisa Rodriguez', 'email': 'lisa@example.com', 'category': 'event planner', 'specialty': 'Wedding Planner', 'location': 'Austin, TX', 'phone': '+1-555-0567', 'pricing': '$2000/event', 'bio': 'Full-service event planning with 10+ years experience'},
            {'id': 104, 'name': 'David Kim', 'email': 'david@example.com', 'category': 'caterer', 'specialty': 'Gourmet Catering', 'location': 'Seattle, WA', 'phone': '+1-555-0890', 'pricing': '$25/person', 'bio': 'Gourmet catering for all occasions'},
            {'id': 105, 'name': 'Emma Wilson', 'email': 'emma@example.com', 'category': 'decorator', 'specialty': 'Event Styling', 'location': 'Denver, CO', 'phone': '+1-555-0345', 'pricing': '$500/event', 'bio': 'Creative event decoration and styling'},
            {'id': 106, 'name': 'Carlos Martinez', 'email': 'carlos@example.com', 'category': 'venue coordinator', 'specialty': 'Venue Management', 'location': 'Phoenix, AZ', 'phone': '+1-555-0678', 'pricing': '$150/hour', 'bio': 'Venue management and coordination specialist'}
        ]

        for prof in sample_professionals:
            result.append({
                'id': prof['id'],
                'name': prof['name'],
                'email': prof['email'],
                'category': prof['category'],
                'specialty': prof['specialty'],
                'location': prof['location'],
                'phone': prof['phone'],
                'bio': prof['bio'],
                'pricing': prof['pricing'],
                'rating': 4.5,
                'reviews': 25,
                'verified': True,
                'portfolio': [],
                'image': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
            })

    return jsonify(result)

@app.route('/api/professional-profile', methods=['POST', 'PUT'])
def professional_profile():
    # Try to get user from JWT, fallback to request data
    try:
        user_id = get_jwt_identity()
    except:
        # Fallback for testing - use user_id from request or default
        if request.is_json:
            data = request.get_json()
        else:
            data = request.form
        user_id = data.get('user_id', 1)  # Default to user 1 for testing

    profile = ProfessionalProfile.query.filter_by(user_id=user_id).first()

    if request.method == 'PUT' and profile:
        # Delete old portfolios on update
        Portfolio.query.filter_by(professional_profile_id=profile.id).delete()

    # Handle text fields - prefer form data for multipart, fallback to json
    if request.form:
        category = request.form.get('category', '')
        specialty = request.form.get('specialty')
        location = request.form.get('location', '')
        phone = request.form.get('phone')
        bio = request.form.get('bio', '')
        pricing = request.form.get('pricing')
        setup_complete = request.form.get('setupComplete', 'false').lower() == 'true'
    else:
        json_data = request.get_json() or {}
        category = json_data.get('category', '')
        specialty = json_data.get('specialty')
        location = json_data.get('location', '')
        phone = json_data.get('phone')
        bio = json_data.get('bio', '')
        pricing = json_data.get('pricing')
        setup_complete = json_data.get('setupComplete', False)

    if not profile:
        # Create new profile
        profile = ProfessionalProfile(
            user_id=user_id,
            category=category,
            specialty=specialty,
            location=location,
            phone=phone,
            bio=bio,
            pricing=pricing,
            setup_complete=setup_complete
        )
        db.session.add(profile)
    else:
        # Update existing profile
        profile.category = category or profile.category
        profile.specialty = specialty or profile.specialty
        profile.location = location or profile.location
        profile.phone = phone or profile.phone
        profile.bio = bio or profile.bio
        profile.pricing = pricing or profile.pricing
        profile.setup_complete = setup_complete

    db.session.commit()

    # Handle profile photo upload
    if 'profilePhoto' in request.files:
        file = request.files['profilePhoto']
        if file and file.filename and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
            unique_filename = f"{timestamp}_{filename}"
            filepath = os.path.join(UPLOAD_FOLDER, unique_filename)
            file.save(filepath)
            profile.profile_image = f'/static/uploads/{unique_filename}'

    # Handle portfolio uploads (only if files present)
    if 'portfolio_images' in request.files:
        files = request.files.getlist('portfolio_images')
        titles = request.form.getlist('portfolio_title')
        descriptions = request.form.getlist('portfolio_description')

        # Limit to 4
        num_portfolios = min(4, len(files))

        for i in range(num_portfolios):
            file = files[i]
            if file and file.filename and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
                unique_filename = f"{timestamp}_{filename}"
                filepath = os.path.join(UPLOAD_FOLDER, unique_filename)
                file.save(filepath)

                portfolio = Portfolio(
                    professional_profile_id=profile.id,
                    title=titles[i] if i < len(titles) else '',
                    description=descriptions[i] if i < len(descriptions) else '',
                    image_path=unique_filename
                )
                db.session.add(portfolio)

        db.session.commit()

    return jsonify({'message': 'Profile updated successfully'}), 200

@app.route('/api/bookings', methods=['GET', 'POST'])
@jwt_required()
def bookings():
    if request.method == 'GET':
        bookings = Booking.query.filter_by(client_id=get_jwt_identity()).all()
        return jsonify([{
            'id': b.id, 'service_id': b.service_id, 'event_date': b.event_date.isoformat(),
            'status': b.status, 'rating': b.rating, 'review': b.review
        } for b in bookings])

    elif request.method == 'POST':
        data = request.get_json()
        booking = Booking(
            client_id=get_jwt_identity(),
            service_id=data['service_id'],
            event_date=datetime.fromisoformat(data['event_date']),
            status='pending'
        )
        db.session.add(booking)
        db.session.commit()
        return jsonify({'message': 'Booking created', 'id': booking.id}), 201

if __name__ == '__main__':
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)
    with app.app_context():
        db.create_all()
    app.run(debug=True)
