tailwind.config = {
  theme: { extend: {
    fontFamily: { sans: ['Outfit', 'sans-serif'], mono: ['Space Grotesk', 'monospace'] },
    colors: { dark: '#0a0a0a', surface: '#121212', primary: '#6366f1', secondary: '#a855f7', accent: '#14b8a6' },
    animation: { blob: 'blob 7s infinite', float: 'float 6s ease-in-out infinite' },
    keyframes: {
      blob: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '33%': { transform: 'translate(30px,-50px) scale(1.1)' }, '66%': { transform: 'translate(-20px,20px) scale(.9)' } },
      float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } }
    }
  } }
};
