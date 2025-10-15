# Mercury Agency

AI-powered full-stack applications agency website.

## Tech Stack

- **React 18** + **TypeScript** - Modern frontend framework
- **Chakra UI** - Component library with custom bronze theme
- **Framer Motion** - Smooth animations
- **Vite** - Fast build tool
- **Google Fonts** - Inter & Orbitron typography

## Features

### Design & UX
- 🎨 Custom bronze-copper dark theme
- 📱 **Mobile-first responsive design**
- ✨ Smooth scroll animations
- 💫 Advanced Framer Motion animations
- 🎭 Beautiful UI with Chakra UI

### Navigation
- 🍔 **Burger menu for mobile devices**
- 🔼 **Auto-hide header** (hides on scroll down, shows on scroll up)
- 🎯 Smooth scroll to sections
- 📍 Touch-friendly navigation

### Mobile Optimizations
- 👆 **Swipeable portfolio cards** on mobile
- 🎯 Touch-friendly buttons (min 48x48px)
- 📏 Optimized layouts for all screen sizes
- ⚡ Performance-optimized animations
- 📊 Responsive typography scaling

### Components
- **Navigation** - Auto-hiding header with burger menu
- **MobileMenu** - Full-screen animated menu overlay
- **SwipeablePortfolio** - Touch-friendly card carousel
- **AnimatedCard** - Cards with hover and scroll animations
- **GradientText** - Bronze gradient text component

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
mercury-agency/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx          # Auto-hide navigation header
│   │   ├── MobileMenu.tsx          # Mobile burger menu
│   │   ├── Hero.tsx                # Hero section (mobile-optimized)
│   │   ├── Services.tsx            # Services showcase
│   │   ├── Portfolio.tsx           # Project portfolio
│   │   ├── SwipeablePortfolio.tsx  # Mobile swipeable cards
│   │   ├── About.tsx               # About section
│   │   ├── Contact.tsx             # Contact form
│   │   ├── GradientText.tsx        # Gradient text component
│   │   └── AnimatedCard.tsx        # Animated card component
│   ├── hooks/
│   │   ├── useScrollDirection.ts   # Detect scroll direction
│   │   └── useIsMobile.ts          # Mobile detection hook
│   ├── theme/
│   │   └── theme.ts                # Chakra UI custom theme
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## Color Palette

- **Background**: `#0a0604`, `#1a0f0d`
- **Primary Bronze**: `#cd7f32`, `#b8732d`
- **Copper Accent**: `#d97941`, `#ff8c42`
- **Dark Bronze**: `#52301a`
- **Text**: `#f5deb3`, `#ffffff`

## License

© 2025 Mercury Agency. All rights reserved.

