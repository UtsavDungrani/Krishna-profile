# Setup Guide - Krishna Profile Website

## Complete Setup Instructions

### Step 1: Install Node.js

If you don't have Node.js installed:

1. Visit [nodejs.org](https://nodejs.org)
2. Download LTS version (v18 or v20)
3. Install and verify: `node --version` and `npm --version`

### Step 2: Navigate to Project

```bash
cd krishna-profile-react
```

### Step 3: Install Dependencies

```bash
npm run install:all
```

This installs packages for:

- Root directory
- Client (React frontend)
- Server (Node.js backend)

**Wait time**: 3-5 minutes depending on internet speed

### Step 4: Configure Email (Backend)

1. **Copy environment template:**

```bash
cp server/.env.example server/.env
```

2. **Edit `server/.env` file** with your email credentials:

#### For Gmail Users:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
```

**How to get Gmail App Password:**

1. Go to [https://myaccount.google.com/security](https://myaccount.google.com/security)
2. Enable "2-Step Verification" if not already enabled
3. Go to "App passwords" (appears after 2FA is enabled)
4. Select "Mail" and "Windows Computer"
5. Copy the generated 16-character password
6. Paste it as `EMAIL_PASSWORD` in `.env`

#### For Other Email Providers (e.g., Outlook, Yahoo):

Find your SMTP settings and update accordingly.

### Step 5: Start Development Server

```bash
npm run dev
```

This starts both frontend and backend simultaneously:

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000

You'll see output like:

```
✓ Server running on http://localhost:5000
VITE v5.0.8 ready in 150 ms
```

### Step 6: Test the Application

1. **Open Frontend**: [http://localhost:5173](http://localhost:5173)
2. **Test Navigation**: Click through all pages
3. **Test Images**: Verify product and workshop images load
4. **Test Contact Form**:
   - Fill out the form with valid data
   - Click "Send Message"
   - Should see success message
   - Check configured email inbox for the inquiry

### Step 7: Production Build

When ready to deploy:

```bash
npm run build
```

This creates:

- `client/dist/` - Frontend production files
- Ready to deploy on Vercel, Netlify, or any static host

## Running Services Separately

### Frontend Only (for development)

```bash
npm run dev:client
```

Runs on: http://localhost:5173

### Backend Only (for development)

```bash
npm run dev:server
```

Runs on: http://localhost:5000

## Common Issues & Solutions

### Issue: "Port 5000 already in use"

**Solution**: Kill the process or change port in `server/.env`

```env
PORT=5001  # Change to different port
```

### Issue: "Cannot POST /api/contact"

**Solution**: Make sure backend is running with `npm run dev:server`

### Issue: Images not showing

**Solution**: Verify images exist in `assets/` folder:

- `logo.png`
- `product-1.jpeg` through `product-24.jpeg`
- `Workshop-1.jpeg` through `Workshop-7.jpeg`

### Issue: Emails not sending

**Solution**:

1. Check `.env` file exists in `server/` folder
2. Verify email credentials are correct
3. For Gmail, make sure you used App Password (not regular password)
4. Check email account allows "Less secure apps" (if not using App Password)
5. Check console for error messages: `npm run dev:server`

### Issue: "CORS error" in console

**Solution**: Make sure `FRONTEND_URL` in `server/.env` matches your frontend URL:

```env
FRONTEND_URL=http://localhost:5173
```

## Deployment Guide

### Deploy Frontend (Vercel)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Set build command: `npm run build`
6. Set output directory: `client/dist`
7. Deploy

### Deploy Backend (Railway or Heroku)

1. Push code to GitHub
2. Go to [railway.app](https://railway.app) or [heroku.com](https://heroku.com)
3. Create new project
4. Connect your GitHub repository
5. Set environment variables (from `.env` file)
6. Set start command: `npm start`
7. Deploy

## File Structure Reference

```
client/
├── src/
│   ├── components/       # Reusable components
│   ├── pages/           # Page components
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind configuration

server/
├── config/              # Email configuration
├── controllers/         # Request handlers
├── routes/             # API routes
├── index.js            # Main server file
└── .env                # Environment variables (create this)

assets/
├── logo.png
├── product-*.jpeg      # 24 product images
└── Workshop-*.jpeg     # 7 workshop images
```

## Next Steps

After setup is complete:

1. **Customize Company Details**:
   - Edit phone/email in `Navbar.jsx`, `Footer.jsx`
   - Update company name and description
   - Add social media links

2. **Add Your Own Images**:
   - Replace images in `assets/` folder
   - Ensure same filenames and aspect ratios

3. **Customize Colors**:
   - Edit `client/tailwind.config.js`
   - Update primary, secondary, accent colors

4. **Add Content**:
   - Update company information in About page
   - Add real testimonials if needed
   - Update FAQ section

5. **Deploy**:
   - Follow deployment guides above
   - Set up custom domain
   - Configure SSL certificate

## Support & Troubleshooting

For detailed help:

- Check README.md in root directory
- Review `.env.example` for environment variables
- Check browser console (F12) for frontend errors
- Check terminal for backend errors

## Verification Checklist

- [ ] Node.js installed
- [ ] Dependencies installed (`npm run install:all`)
- [ ] `.env` file created in `server/`
- [ ] Email credentials configured
- [ ] Frontend starts (`npm run dev:client`)
- [ ] Backend starts (`npm run dev:server`)
- [ ] Images load on homepage
- [ ] Contact form submits successfully
- [ ] Email received in inbox

## Performance Tips

1. Optimize product images to <200KB each
2. Enable caching headers in production
3. Use CDN for static assets
4. Monitor server logs for errors
5. Test on real devices/networks

---

**Ready to launch your professional website!** 🚀
