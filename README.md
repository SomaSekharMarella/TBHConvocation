# TBH Journey - A Blockchain-Gated Storytelling Website

A futuristic, dark-themed, scroll-based storytelling website documenting a mentorship-to-leadership journey in a college blockchain club.

## Features

- 🔐 **Wallet Connection Gate** - Connect with MetaMask or WalletConnect to enter
- 📖 **Scroll-based Storytelling** - Smooth, cinematic narrative experience
- 🎨 **Futuristic Dark UI** - Neon accents, smooth animations
- 💫 **Framer Motion Animations** - Professional, emotion-driven transitions
- 🌐 **Web3 Native** - Built with wagmi and RainbowKit

## Tech Stack

- **React** + **Vite** - Fast development and build
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **wagmi** + **RainbowKit** - Wallet connection
- **@tanstack/react-query** - Data fetching

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure WalletConnect Project ID

1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com)
2. Create a new project
3. Copy your Project ID
4. Update `src/config/wagmi.js`:

```javascript
projectId: 'YOUR_PROJECT_ID_HERE',
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── WalletGate.jsx      # Landing page with wallet connect
│   └── StorySection.jsx    # Reusable story section component
├── pages/
│   └── Home.jsx            # Main page with story sections
├── content/
│   └── story.js            # Story content (all sections)
├── animations/
│   └── framerVariants.js   # Framer Motion animation variants
├── config/
│   └── wagmi.js            # Wagmi/RainbowKit configuration
├── App.jsx                  # Main app with providers
└── main.jsx                 # Entry point
```

## Customization

### Adding Photos

1. Place images in `public/images/` folder
2. Import in `StorySection.jsx` or `Home.jsx`
3. Add image components where needed

### Modifying Story Content

Edit `src/content/story.js` to update the narrative.

### Changing Colors

Update `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  neon: {
    cyan: '#00ffff',
    violet: '#8b5cf6',
  },
  // ...
}
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- Cloudflare Pages

## Notes

- Wallet connection is symbolic (no transactions required)
- The site works best on desktop but is responsive
- All animations are optimized for performance
- Story content preserves Telugu-English mix for authenticity

## License

Personal project - All rights reserved

---

Built with ❤️ for documenting a journey of transformation.

https://tbh-convocation.vercel.app/
