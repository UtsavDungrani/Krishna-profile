# Krishna Profile - Website

Professional, production-ready website for an electricity pole fabrication factory, built with React, Node.js, Express, and Tailwind CSS.

## 📋 Features

### Frontend

- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Modern UI**: Clean, industrial theme with practical spacing
- **Dynamic Image Loading**: Automatically loads images from assets folder
- **Image Slider**: Hero section with auto-scrolling carousel
- **Product Grid**: Filterable product catalog
- **Contact Form**: With client-side validation
- **Reusable Components**: Modular, maintainable code

### Backend

- **Express Server**: Fast and lightweight API server
- **Email Integration**: Nodemailer for automated emails
- **Form Validation**: Input validation on both client and server
- **Error Handling**: Comprehensive error management
- **CORS Support**: Secure cross-origin requests

### Pages

1. **Home**: Hero section, features, products preview, workshop overview, CTA
2. **About Us**: Company story, mission, vision, values, team info
3. **Products**: Grid layout with category filtering (24 products)
4. **Workshop**: Manufacturing facility images, process overview, equipment details
5. **Contact**: Contact info, Google Maps, contact form, FAQ

## 🚀 Quick Start

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. **Navigate to project directory**

```bash
cd krishna-profile-react
```

2. **Install all dependencies**

```bash
npm run install:all
```

This will install dependencies for root, client, and server folders.

### Configuration

1. **Create `.env` file in server folder**

Copy `.env.example` and update with your email configuration:

```bash
cp server/.env.example server/.env
```

Edit `server/.env`:

```env
PORT=5000
NODE_ENV=development

# Gmail Configuration (or any SMTP provider)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
EMAIL_FROM=noreply@krishnapolindustries.com
RECIPIENT_EMAIL=info@krishnapolindustries.com

FRONTEND_URL=http://localhost:5173
```

**Note for Gmail Users:**

1. Enable 2-factor authentication on your Google account
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Use the app password in `EMAIL_PASSWORD` field

### Running the Application

#### Development Mode (both client and server)

```bash
npm run dev
```

This starts:

- Frontend on `http://localhost:5173`
- Backend on `http://localhost:5000`

#### Individual Services

**Frontend only:**

```bash
npm run dev:client
```

**Backend only:**

```bash
npm run dev:server
```

#### Production Build

```bash
npm run build
```

Builds the React app for production in `client/dist/`

## 📁 Project Structure

```
krishna-profile-react/
├── assets/                    # Product and workshop images
│   ├── logo.png
│   ├── product-*.jpeg        # 24 product images
│   └── Workshop-*.jpeg       # 7 workshop images
│
├── client/                    # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ImageSlider.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── Workshop.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── server/                    # Node.js Backend
│   ├── config/
│   │   └── emailConfig.js    # Email configuration
│   ├── controllers/
│   │   └── contactController.js
│   ├── routes/
│   │   └── contact.js
│   ├── index.js              # Main server file
│   ├── .env.example
│   └── package.json
│
├── package.json              # Root package.json
└── README.md
```

## 🎨 Design System

### Colors

- **Primary**: `#1e40af` (Industrial Blue)
- **Secondary**: `#64748b` (Gray)
- **Accent**: `#0f766e` (Teal)
- **White**: `#ffffff`
- **Dark**: `#111827`

### Typography

- **Font**: Inter (Google Fonts)
- **Sizes**: 12px (text-xs) to 48px (heading)

### Components

- Buttons: primary, secondary, outline variants
- Cards: with hover effects and subtle shadows
- Forms: with validation and success/error states
- Images: responsive with proper aspect ratios

## 📧 Contact Form Flow

1. User fills out contact form on `/contact` page
2. Client-side validation checks:
   - All fields required
   - Valid email format
   - Valid 10-digit phone number
   - Message length (10-5000 chars)
3. Form data sent to `POST /api/contact`
4. Backend validates again using express-validator
5. Email sent to company inbox using Nodemailer
6. Confirmation email sent to user
7. Success/error message shown to user

## 🔒 Security Features

- Input validation on both client and server
- HTML escaping in email content
- CORS protection
- Environment variable isolation
- Error messages don't expose sensitive info

## 🚀 Deployment

### Frontend (Vercel, Netlify, etc.)

```bash
npm run build
# Deploy the 'client/dist' folder
```

### Backend (Heroku, Railway, etc.)

1. Set environment variables on hosting platform
2. Push to git repository
3. Configure start command: `npm start`

## 📝 Environment Variables

### Server

- `PORT`: Server port (default: 5000)
- `NODE_ENV`: development or production
- `EMAIL_HOST`: SMTP server host
- `EMAIL_PORT`: SMTP server port
- `EMAIL_USER`: Email account username
- `EMAIL_PASSWORD`: Email account password
- `EMAIL_FROM`: Sender email address
- `RECIPIENT_EMAIL`: Where to send contact form submissions
- `FRONTEND_URL`: Frontend URL for CORS

## 🛠 Technology Stack

### Frontend

- React 18
- React Router v6
- Tailwind CSS
- Vite
- React Icons
- Axios

### Backend

- Express.js
- Nodemailer
- Express-validator
- dotenv
- CORS

## 📱 Responsive Design

- **Desktop**: Full layout with all features
- **Tablet**: Optimized touch targets and spacing
- **Mobile**: Single column, hamburger menu, touch-friendly buttons

## ✅ Best Practices

- Clean, modular component structure
- Reusable utility components
- Proper error handling
- Loading states on forms
- Accessible HTML and ARIA labels
- Performance optimized with lazy loading
- Code comments where necessary

## 🐛 Troubleshooting

### "Cannot find module" errors

```bash
# Delete node_modules and reinstall
rm -rf node_modules client/node_modules server/node_modules
npm run install:all
```

### Port already in use

Change ports in:

- `client/vite.config.js` (frontend port)
- `server/.env` (backend port)

### Emails not sending

1. Check `.env` file is configured
2. For Gmail: verify app password is correct
3. Check `RECIPIENT_EMAIL` is valid
4. Review backend console for errors

### Images not loading

1. Ensure files exist in `assets/` folder
2. Check image filenames match expected pattern
3. Verify file extensions (case-sensitive on Linux/Mac)

## 📖 Additional Resources

- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Express Docs](https://expressjs.com)
- [Nodemailer Docs](https://nodemailer.com)
- [Vite Docs](https://vitejs.dev)

## 📄 License

This project is ready for commercial use.

## 👥 Support

For issues or questions, contact:

- Phone: +91-9876-543-210
- Email: info@krishnapolindustries.com

---

**Built with ❤️ by a Senior Full-Stack Developer**
