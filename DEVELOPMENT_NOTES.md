# Development Notes & Architecture

## Architecture Overview

```
┌─────────────────────────────────────────────┐
│        React Frontend (Vite)                │
│   - Client-side routing                     │
│   - Form validation                         │
│   - Dynamic image loading                   │
│   - Responsive design (Tailwind)            │
└─────────────┬───────────────────────────────┘
              │ AXIOS / HTTP
              ↓
┌─────────────────────────────────────────────┐
│     Express Backend (Node.js)               │
│   - API endpoints                           │
│   - Input validation                        │
│   - Email handling (Nodemailer)             │
│   - CORS & Error handling                   │
└─────────────┬───────────────────────────────┘
              │ SMTP
              ↓
┌─────────────────────────────────────────────┐
│        Email Service (Gmail/SMTP)           │
│   - Send to company                         │
│   - Send confirmation to user               │
└─────────────────────────────────────────────┘
```

## Key Design Decisions

### 1. Frontend Architecture (Vite + React)

**Why Vite instead of Create React App?**

- Faster development server (HMR)
- Faster builds
- Smaller bundle size
- Modern, lightweight tooling
- Industry standard for new projects

**Component Structure:**

- **Navbar/Footer**: Global layout components
- **Pages**: Route-level components (Home, About, Products, etc.)
- **Components**: Reusable sub-components (ImageSlider, ProductCard)
- **CSS**: Global styles in index.css + Tailwind utilities

### 2. Styling Strategy (Tailwind CSS)

**Why Tailwind over Styled-Components or CSS Modules?**

- Rapid development (utility-first)
- Consistent spacing and sizing
- No CSS-in-JS overhead
- Easy responsive design
- Smaller final bundle
- Industry standard

**Custom Utilities** added for:

- `.btn-*` classes (primary, secondary, outline)
- `.card` for consistent card styling
- `.section-*` for heading sizes
- `.fade-in` animation

### 3. Dynamic Image Loading

**Implementation:**

```javascript
const module = await import(`../../assets/product-${i}.jpeg`);
const imagePath = module.default;
```

**Why dynamic?**

- No hardcoded image URLs
- Easy to add/remove images by updating filenames
- Automatically scales with number of images
- Future-proof for content updates

### 4. Backend Structure (Express)

**Routes → Controllers → Config Pattern**

```
router → controller → service/config
```

**Example**: Contact submission flow

1. `POST /contact` hits route
2. Route validates with express-validator
3. Passes to contactController.submitContact
4. Controller calls sendContactEmail from emailConfig
5. Email sent via Nodemailer
6. Response returned to frontend

**Benefits:**

- Separation of concerns
- Easy to test
- Reusable logic
- Maintainable code

### 5. Email Handling

**Two-email system:**

1. **To Company**: Full inquiry details for internal processing
2. **To User**: Confirmation email with receipt acknowledgment

**Security Features:**

- HTML escaping to prevent injection
- Newlines converted to `<br>` tags
- Proper MIME type handling

### 6. Form Validation Strategy

**Double validation:**

1. **Client-side** (instant feedback):
   - Empty fields
   - Email format
   - Phone format
   - Message length

2. **Server-side** (security):
   - All fields required
   - Email valid
   - Phone digit count
   - Message length 10-5000 chars

**Why double validation?**

- Better UX (instant feedback)
- Security (can't bypass client validation)
- API protection (rate limiting, input sanitization)

## Responsive Design Approach

### Breakpoints Used:

- `sm: 640px` - Small devices
- `md: 768px` - Tablets
- `lg: 1024px` - Desktops
- `xl: 1280px` - Large screens

### Mobile-First Strategy:

- Base styles for mobile
- Add complexity with `md:`, `lg:` prefixes
- Ensures mobile experience is optimal

### Example:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {/* 1 col on mobile, 2 on tablet, 4 on desktop */}
</div>
```

## Performance Optimizations

1. **Image Optimization**:
   - Use responsive widths
   - Proper aspect ratios
   - Consider lazy loading for future

2. **Code Splitting**:
   - React Router automatically code-splits pages
   - Each page loads only when needed

3. **Tailwind PurgeCSS**:
   - Only used styles included in production
   - ~50KB CSS file (vs 200KB+ with all styles)

4. **Vite Build**:
   - Minified JavaScript
   - Tree-shaking removes unused code
   - Optimized chunks

## SEO Considerations

Current optimizations:

- ✅ Semantic HTML (`<header>`, `<nav>`, `<section>`, etc.)
- ✅ Proper heading hierarchy (h1 → h2)
- ✅ Image alt text
- ✅ Meta descriptions (in HTML head)
- ✅ Clean URLs with React Router

Future improvements:

- Add meta tags dynamically (React Helmet)
- Sitemap generation
- robots.txt configuration
- Structured data (Schema.org)
- Open Graph tags for social sharing

## Accessibility Features

- ✅ Semantic HTML elements
- ✅ ARIA labels on buttons
- ✅ Alt text on images
- ✅ Proper heading hierarchy
- ✅ Color contrast ratios meet WCAG AA
- ✅ Keyboard navigation support
- ✅ Mobile touch targets >= 44px

## Error Handling Strategy

### Frontend:

- Try-catch in form submission
- User-friendly error messages
- No sensitive data exposed
- Success/error toast notifications

### Backend:

- Validation layer (express-validator)
- Try-catch in controllers
- Proper HTTP status codes
- Detailed server logs (dev mode only)
- User-safe error responses (production)

## Environment-Based Configuration

```env
# Development
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# Production
NODE_ENV=production
FRONTEND_URL=https://yourcompany.com
```

Benefits:

- Different settings per environment
- Sensitive data isolation
- Easy deployment configuration
- No hardcoded values

## Testing Recommendations

### Frontend (to add):

- Jest + React Testing Library
- Component unit tests
- E2E tests with Cypress

### Backend (to add):

- Jest for unit tests
- Supertest for API tests
- Email mock testing

### Manual Testing Checklist:

- ✅ All pages load
- ✅ Navigation works
- ✅ Images display
- ✅ Forms validate
- ✅ Contact form submits
- ✅ Emails send
- ✅ Mobile responsive
- ✅ No console errors

## Deployment Checklist

**Frontend:**

- [ ] Build completes without errors
- [ ] Environment variables set
- [ ] API endpoints point to production
- [ ] Images optimized
- [ ] SEO tags configured

**Backend:**

- [ ] All env variables set
- [ ] Database (if any) migrated
- [ ] Email credentials verified
- [ ] CORS whitelist updated
- [ ] SSL certificate installed
- [ ] Rate limiting configured
- [ ] Logs configured

## Future Enhancements

1. **Admin Dashboard**
   - Manage products
   - View inquiries
   - Edit company info
   - Update testimonials

2. **Database Integration**
   - MongoDB for inquiries
   - Store contact submissions
   - Generate reports

3. **Advanced Features**
   - User accounts
   - Order tracking
   - Live chat support
   - Blog/News section

4. **Payment Integration**
   - Stripe/Razorpay
   - Online quotes
   - Invoice generation

5. **Analytics**
   - Google Analytics
   - User behavior tracking
   - Conversion tracking

6. **Notifications**
   - SMS notifications
   - Push notifications
   - Slack integration

## Code Style & Conventions

### JavaScript/JSX:

- Use functional components with hooks
- Destructuring for props
- camelCase for variables
- PascalCase for components
- Comments for complex logic

### CSS/Tailwind:

- Mobile-first approach
- Utility classes first
- Custom classes in `@layer` when needed
- Consistent spacing (4px units)

### File Structure:

- Lowercase for folders
- PascalCase for component files
- index.js for component exports
- Separate CSS modules optional

## Common Gotchas & Solutions

### 1. Image Import Issues

**Problem**: Static imports not working
**Solution**: Use dynamic imports with full path from assets folder

### 2. CORS Errors

**Problem**: Frontend can't reach backend
**Solution**: Check `FRONTEND_URL` in `.env` and CORS middleware

### 3. Email Not Sending

**Problem**: Nodemailer connection failed
**Solution**: Verify SMTP credentials, check if 2FA enabled (Gmail)

### 4. Port Conflicts

**Problem**: "Address already in use"
**Solution**: Change port or kill existing process

### 5. CSS Not Loading

**Problem**: Styles not showing in production
**Solution**: Check Tailwind `content` config includes all JSX files

## Git Workflow

Suggested branches:

```
main (production) ← release
 ↑
develop ← feature branches
 ↑
feature/page-name
feature/component-name
bugfix/issue-name
```

## Monitoring & Logging

Current setup:

- Console logs for development
- Error logging to console

Recommended additions:

- Sentry for error tracking
- LogRocket for session replay
- CloudWatch/Datadog for server logs

## Performance Metrics to Monitor

- Page load time (LCP - Largest Contentful Paint)
- Time to Interactive (TTI)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)
- API response times
- Email delivery success rate

---

**This document should be updated as the project evolves and new architectural decisions are made.**
