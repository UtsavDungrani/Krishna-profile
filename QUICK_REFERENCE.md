# Quick Reference Card

## 🚀 Quick Start (30 seconds)

```bash
# 1. Install dependencies (first time only)
npm run install:all

# 2. Configure email (first time only)
# Copy server/.env.example to server/.env
# Add your email credentials

# 3. Start development
npm run dev

# 4. Open browser
# Frontend: http://localhost:5173
# Backend: http://localhost:5000
```

---

## 📁 File Locations

| What          | Where                              |
| ------------- | ---------------------------------- |
| Frontend code | `client/src/`                      |
| Backend code  | `server/`                          |
| Images        | `assets/`                          |
| Styles        | `client/src/index.css` + Tailwind  |
| Routes        | `client/src/App.jsx`               |
| Navigation    | `client/src/components/Navbar.jsx` |
| Pages         | `client/src/pages/`                |

---

## 🔧 Common Tasks

### Start Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Add New Page

1. Create file in `client/src/pages/NewPage.jsx`
2. Add route in `client/src/App.jsx`
3. Add link in Navbar

### Edit Company Info

- Phone/Email: `Navbar.jsx`, `Footer.jsx`
- About: `About.jsx`
- Products: `Products.jsx`
- Workshop: `Workshop.jsx`
- Colors: `tailwind.config.js`

### Replace Images

1. Delete old image from `assets/`
2. Add new image with same filename
3. Restart dev server

### Test Contact Form

1. Go to http://localhost:5173/contact
2. Fill out form
3. Click "Send Message"
4. Check email inbox (both company & personal)

---

## 📞 Contact Information

| Info    | Value                                    |
| ------- | ---------------------------------------- |
| Phone   | +91-9876-543-210                         |
| Email   | info@krishnapolindustries.com            |
| Address | Factory Road, Industrial Zone, Bangalore |

**To change:** Edit in `Navbar.jsx`, `Footer.jsx`, `Contact.jsx`

---

## 🎨 Colors (Update in `tailwind.config.js`)

```
Primary (Blue): #1e40af
Secondary (Gray): #64748b
Accent (Teal): #0f766e
```

---

## ❌ Troubleshooting

| Problem            | Solution                              |
| ------------------ | ------------------------------------- |
| Port 5000 in use   | Change `PORT=5001` in `server/.env`   |
| Emails not sending | Check `.env` file, verify credentials |
| Images not loading | Check filenames in `assets/` folder   |
| "Module not found" | Run `npm run install:all` again       |
| CORS error         | Check `FRONTEND_URL` in `server/.env` |

---

## 📊 Project Statistics

- **Frontend Pages**: 5 (Home, About, Products, Workshop, Contact)
- **Backend Routes**: 1 (POST /contact)
- **Components**: 4 (Navbar, Footer, ImageSlider, ProductCard)
- **Product Images**: 24
- **Workshop Images**: 7
- **Total Files**: 33

---

## 🌐 URLs

| Page        | URL                   |
| ----------- | --------------------- |
| Home        | /                     |
| About       | /about                |
| Products    | /products             |
| Workshop    | /workshop             |
| Contact     | /contact              |
| Backend API | http://localhost:5000 |

---

## 📦 Dependencies

### Frontend

- React 18, React Router, Tailwind CSS, React Icons, Axios, Vite

### Backend

- Express, Nodemailer, express-validator, CORS, body-parser, dotenv

---

## 📝 Key Files to Know

| File                        | Purpose               |
| --------------------------- | --------------------- |
| `package.json`              | Root package, scripts |
| `client/src/App.jsx`        | Routing setup         |
| `client/src/pages/Home.jsx` | Home page content     |
| `server/index.js`           | Backend server setup  |
| `server/.env`               | Email credentials     |
| `server/routes/contact.js`  | Contact API endpoint  |
| `tailwind.config.js`        | Theme colors & fonts  |

---

## 🚀 Deployment URLs

| Service           | URL                     |
| ----------------- | ----------------------- |
| Frontend (Vercel) | Deploy `client/dist`    |
| Backend (Railway) | Configure env variables |

---

## 💡 Tips

- **Mobile Testing**: Use Chrome DevTools (F12 → Toggle device toolbar)
- **Email Testing**: Use Mailtrap.io for free email testing
- **Image Optimization**: Compress images to <200KB each
- **Performance**: Check with Lighthouse (DevTools)
- **SEO**: Use Google Search Console for indexing

---

## 📞 Help

- Check `README.md` for full documentation
- Check `SETUP_GUIDE.md` for detailed setup
- Check `DEVELOPMENT_NOTES.md` for architecture
- Check console logs (F12) for errors

---

## ✅ Checklist Before Launch

- [ ] Email configured (`.env` file)
- [ ] Test contact form submits
- [ ] Verify images load
- [ ] Check on mobile device
- [ ] Test all page links
- [ ] Update company details
- [ ] Set production email
- [ ] Deploy frontend
- [ ] Deploy backend
- [ ] Add custom domain

---

## 🎯 Next Steps

1. ✅ Configure email in `server/.env`
2. ✅ Run `npm run install:all`
3. ✅ Run `npm run dev`
4. ✅ Test all pages
5. ✅ Test contact form
6. ✅ Deploy when ready

---

**Everything is ready! Start with: `npm run dev`**
