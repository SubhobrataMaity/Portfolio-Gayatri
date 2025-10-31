# UI/UX Designer Portfolio

A modern, responsive portfolio website for UI/UX designers featuring light/dark mode themes, smooth animations, and a clean, professional design.

## ✨ Features

- 🌗 **Dual Theme System**: Beautiful light mode (neumorphic) and dark mode (modern with glow effects)
- 📱 **Fully Responsive**: Optimized for desktop, tablet, mobile, and all browsers
- 🎨 **3 Pages**: Home, Projects, and About/Contact
- ⚡ **Smooth Animations**: Professional transitions using Framer Motion
- 🎯 **Modern UI/UX**: Clean, intuitive interface with excellent user experience
- 🚀 **Fast Performance**: Built with Next.js 14 for optimal speed
- ♿ **Accessible**: ARIA labels and proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Manrope, Inter)

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📖 Documentation

For detailed customization instructions, see [Documentation.md](./Documentation.md)

### Quick Customization

1. **Update Personal Info**: Edit name, bio, and contact details in page files
2. **Add Projects**: Modify the projects array in `src/app/projects/page.tsx`
3. **Change Colors**: Update theme colors in `tailwind.config.ts`
4. **Add Resume**: Place `resume.pdf` in the `/public` folder

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/              # Pages and layouts
│   ├── components/       # Reusable components
│   └── contexts/         # React contexts (theme)
├── public/               # Static assets
└── Documentation.md      # Detailed guide
```

## 🎨 Theme Modes

### Light Mode
- Minimal neumorphic design
- Soft shadows and rounded cards
- Off-white background (#F9FAFB)
- Accent: Royal blue (#0066FF)

### Dark Mode
- Modern dark aesthetic
- Glow effects on hover
- Dark navy background (#0D1117)
- Accent: Cyan (#00FFFF) & Violet (#9D4EDD)

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push -u origin main

# Deploy on Vercel
# Visit vercel.com and import your repository
```

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- DigitalOcean

## ✉️ Contact Form Email Setup

The About page contact form sends emails via SMTP using Nodemailer.

1) Add the following variables to a `.env.local` file in the project root:

```
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
CONTACT_TO=destination_email_address
```

- For Gmail, create an App Password and use:
  - `SMTP_HOST=smtp.gmail.com`
  - `SMTP_PORT=465` (secure) or `587`
  - `SMTP_USER=your@gmail.com`
  - `SMTP_PASS=your_app_password`

2) Restart the dev server after adding env vars:

```
npm run dev
```

When deployed (e.g., Vercel), add these environment variables in your hosting provider settings.

## 📝 Customization Checklist

- [ ] Update name and title
- [ ] Change email and social links
- [ ] Add your projects
- [ ] Update bio and experience
- [ ] Add resume PDF
- [ ] Customize colors (optional)
- [ ] Test on all devices

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest) - iOS & macOS
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📞 Support

For issues or questions, refer to:
- [Documentation.md](./Documentation.md) - Detailed guide
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Made with ❤️ for UI/UX Designers**
