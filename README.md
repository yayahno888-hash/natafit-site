# Natafit — Fitness Training Website

Modern, responsive fitness training website built with vanilla HTML, CSS, and JavaScript. Features multilingual support, dark theme, and clean UI design.

## 🚀 Live Demo
[View Live Site](https://yayahno888-hash.github.io/natafit-site/)

## ✨ Features

- **🌍 Multilingual Support**: Full translation system (English, German, Russian)
- **🌓 Dark/Light Theme**: Smooth theme toggle with localStorage persistence
- **📱 Fully Responsive**: Mobile-first design, works on all devices
- **🎨 Modern UI**: Clean interface with smooth animations
- **📧 Contact Form**: Working contact form with validation
- **📅 Schedule System**: Interactive class schedule display
- **♿ Accessible**: ARIA labels, semantic HTML, keyboard navigation

## 🛠️ Technologies

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Design**: Custom CSS with CSS Variables for theming
- **Hosting**: GitHub Pages
- **Version Control**: Git

## 📂 Project Structure

```
natafit-site/
├── index.html          # Home page
├── services.html       # Services overview
├── schedule.html       # Class schedule
├── contact.html        # Contact form
├── datenschutz.html    # Privacy policy
├── impressum.html      # Legal notice
├── css/
│   └── styles.css      # Main stylesheet (1000+ lines)
├── js/
│   ├── translations.js # i18n system
│   ├── theme.js        # Dark/light theme toggle
│   ├── contact-form.js # Form handling
│   ├── booking-form.js # Schedule booking
│   └── scroll-progress.js # Scroll progress bar
└── assets/
    └── logo.svg        # Brand logo
```

## 🎯 Key Technical Implementations

### Theme System
- CSS custom properties for dynamic color switching
- Smooth transitions (0.3s ease-in-out)
- LocalStorage for preference persistence
- Automatic system preference detection

### Translation System
- JSON-based translation files
- Dynamic content replacement via `data-translate` attributes
- Language persistence across pages
- Fallback to English for missing translations

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Flexible grid layouts
- Touch-friendly hamburger menu

## 💡 What I Learned

- Building a complete translation system from scratch
- Implementing theme switching with CSS variables
- Creating smooth animations and transitions
- Form validation and user feedback
- SEO optimization (meta tags, Open Graph, semantic HTML)
- Accessibility best practices (ARIA, keyboard navigation)

## 🎨 Design Decisions

**Color Palette:**
- Light theme: Beige (#F7EFE6) with brown accents (#C08956)
- Dark theme: Navy (#0f1724) with orange accents (#FF7A59)
- Contrast ratio: WCAG AA compliant

**Typography:**
- System font stack (Segoe UI, Roboto) for fast loading
- 16px base size, 1.6 line height
- Clear hierarchy with consistent spacing

**Animations:**
- Subtle entrance animations (fadeInUp, fadeInLeft)
- Hover effects on interactive elements
- Smooth page transitions

## 🚀 Performance

- **Vanilla JavaScript**: No frameworks, minimal bundle size
- **No external dependencies**: All code written from scratch
- **Fast loading**: Optimized CSS, minimal HTTP requests
- **Responsive images**: Properly sized for all devices

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔮 Future Enhancements

- [ ] Add booking system backend (API integration)
- [ ] Implement PWA features (service worker, offline mode)
- [ ] Add workout videos/gallery
- [ ] Client testimonials carousel
- [ ] Newsletter signup integration
- [ ] Calendar integration for scheduling

## 👨‍💻 About

Built by **Yahya** (15 years old) — aspiring web developer from Rostock, Germany.

Currently learning web development and seeking **Ausbildung** (vocational training) as Fachinformatiker Anwendungsentwicklung in Hamburg.

**Skills**: HTML5, CSS3, JavaScript, Responsive Design, Git/GitHub, UI/UX basics

**Portfolio**: [yayahno888-hash.github.io/my-portfolio](https://yayahno888-hash.github.io/my-portfolio/)

---

**Note**: This is a portfolio/demo project. For a real fitness business, I can create similar professional websites with custom features tailored to your needs.

## 📄 License

This project is open source for portfolio purposes. Feel free to learn from the code, but please don't copy it entirely for commercial use.

---

Built with 💪 for the fitness community