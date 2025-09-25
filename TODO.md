<<<<<<< HEAD
# TODO: Implement Portfolio Image Upload Functionality and Resolve Merge Conflicts

## Overview
This TODO tracks the implementation of portfolio image upload in the frontend, integration with the existing backend API, and resolution of merge conflicts in the GitHub PR for the "nathan-functionalities" branch. The goal is to enable professionals to upload real images to their portfolio in Profile.js, display them dynamically in FeaturedProfessionals.js, and ensure the PR can be merged cleanly.

## Steps

### Step 1: Edit src/pages/Profile.js
- Add file input fields for each portfolio item when in editing mode.
- Modify `addPortfolioItem` to prompt for file selection before adding a new item.
- Update `handleSave` to collect all portfolio data (titles, descriptions, files) into FormData and send a PUT request to `/api/professional-profile` (include user_id from auth).
- Refresh portfolio state from the API response after save.
- Update image rendering to use `item.image_url` from backend (fallback to placeholder).
- Add Authorization header with JWT token from AuthContext to API calls.
- Ensure form handles multiple files and limits to 4 items.

Status: [ ] Not started

### Step 2: Edit src/components/FeaturedProfessionals.js
- Remove hardcoded `allProfessionals` array.
- Add `useState` for professionals and `useEffect` to fetch from `/api/professionals?category=${categoryFilter}` on mount and filter change.
- Update filtering logic to apply to fetched data (map role to category).
- Adjust professional rendering: Use API fields (name, role=category/specialty, portfolio as array of {image_url}).
- Update carousel and modal to render dynamic portfolio: `<img src={item.image_url} alt={item.title} />`.
- Handle empty states and loading (add spinner).
- Keep existing styling and interactions (modal, slide timer).

Status: [ ] Not started

### Step 3: Test the Implementation Locally
- Start backend: `cd server && python run.py` (ensure DB is created, uploads folder exists).
- Start frontend: `npm start`.
- Login as professional user.
- Go to /profile, edit mode, add portfolio item: Select file, enter title/desc, save – verify upload to /static/uploads/ and DB.
- Check FeaturedProfessionals component: Images should display uploaded ones (refresh page).
- Test edge cases: No files, invalid file types, >4 items (limit in backend), auth errors.
- Verify no console errors, images load correctly (CORS if needed).

Status: [ ] Not started

### Step 4: Resolve PR Conflicts via Local Merge
- Fetch upstream: `git fetch upstream`.
- Merge main into local branch: `git merge upstream/main`.
- Manually resolve conflicts in Profile.js and FeaturedProfessionals.js (combine upload logic with any upstream changes, remove markers).
- Commit: `git add . && git commit -m "Resolve merge conflicts: integrate portfolio upload"`.
- Push: `git push origin nathan-functionalities` (updates PR automatically).

Status: [ ] Not started

### Step 5: Final Verification and PR Update
- Check GitHub PR: Conflicts should be gone; review changes.
- If needed, rebase: `git rebase upstream/main` then force-push with `--force-with-lease`.
- Test PR branch on GitHub (if CI/CD) or locally.
- Mark PR ready for review.

Status: [ ] Not started

## Notes
- Backend (/api/professional-profile) already handles uploads; no changes needed.
- Use FormData for multipart uploads; include 'user_id' or rely on JWT.
- Fallback images: Use Unsplash placeholders if no upload.
- After Step 2 completion, update this TODO by editing the status checkboxes.
=======
# Add Professional Profile Photos to Browse Cards

## Tasks
- [x] Update backend ProfessionalProfile model to include profile_image field
- [x] Modify professional-profile API endpoint to handle profile_image upload
- [x] Update get_professionals API to return profile_image for each professional
- [x] Add profile photo upload field to ProfessionalSetup.js form
- [x] Update Browse.js to fetch professionals from API instead of using hardcoded data
- [ ] Test the photo upload and display functionality
>>>>>>> 611ce28 (add changes)
