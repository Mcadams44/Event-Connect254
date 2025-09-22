// Test script to verify professional registration and profile creation
const API_URL = 'http://localhost:5000';

async function testProfessionalFlow() {
  try {
    // 1. Register a new professional
    console.log('1. Registering new professional...');
    const registerResponse = await fetch(`${API_URL}/api/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test Professional',
        email: `test.pro.${Date.now()}@example.com`,
        password: 'password123',
        user_type: 'professional'
      })
    });
    
    if (!registerResponse.ok) {
      throw new Error(`Registration failed: ${registerResponse.status}`);
    }
    
    const registerData = await registerResponse.json();
    console.log('✓ Registration successful:', registerData.user.name);
    
    // 2. Create professional profile
    console.log('2. Creating professional profile...');
    const profileResponse = await fetch(`${API_URL}/api/professional-profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${registerData.access_token}`
      },
      body: JSON.stringify({
        category: 'photographer',
        specialty: 'Event Photography',
        location: 'Test City, TS',
        phone: '+1-555-TEST',
        bio: 'Test professional photographer',
        pricing: '$100/hour',
        setupComplete: true
      })
    });
    
    if (!profileResponse.ok) {
      throw new Error(`Profile creation failed: ${profileResponse.status}`);
    }
    
    console.log('✓ Profile created successfully');
    
    // 3. Check if professional appears in browse list
    console.log('3. Checking browse list...');
    const browsResponse = await fetch(`${API_URL}/api/professionals`);
    const professionals = await browsResponse.json();
    
    const foundProfessional = professionals.find(p => p.email === registerData.user.email);
    if (foundProfessional) {
      console.log('✓ Professional appears in browse list:', foundProfessional.name);
    } else {
      console.log('✗ Professional NOT found in browse list');
      console.log('Available professionals:', professionals.map(p => p.name));
    }
    
  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

// Run the test
testProfessionalFlow();