/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          surface: '#0d0d0d',
          card: '#111111',
        },
        text: {
          primary: '#e6e6e6',
          secondary: '#bfbfbf',
          muted: '#808080',
        },
        accent: {
          // Muted electric blue / deep violet / cyan glow
          DEFAULT: '#4a9eff',
          soft: '#3d7fd9',
          glow: 'rgba(74, 158, 255, 0.15)',
        }
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'section': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.3', letterSpacing: '0em' }],
      },
      animation: {
        'fade-slow': 'fadeSlow 2s ease-out',
        'fade-in-up': 'fadeInUp 1.5s ease-out',
        'blur-in': 'blurIn 2s ease-out',
      },
      keyframes: {
        fadeSlow: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blurIn: {
          '0%': { filter: 'blur(10px)', opacity: '0' },
          '100%': { filter: 'blur(0px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

