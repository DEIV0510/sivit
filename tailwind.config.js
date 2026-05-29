/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EBF2FF',
          100: '#D7E4FF',
          200: '#B0C9FF',
          300: '#84A9FF',
          400: '#5688FF',
          500: '#2E6BFF',
          600: '#0B5CFF', // primary
          700: '#0A49CC',
          800: '#0C3C9E',
          900: '#0E327D',
          950: '#091E4B',
        },
        ink: {
          50: '#F6F8FC',
          100: '#EDF1F7',
          200: '#D9E0EC',
          300: '#B6C0D4',
          400: '#8593AD',
          500: '#5C6A85',
          600: '#41506B',
          700: '#2B3850',
          800: '#182338',
          900: '#0C1426',
          950: '#060B16', // cinematic dark background
        },
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['clamp(2.75rem, 6.5vw, 5.75rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'heading': ['clamp(1.85rem, 3.6vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'subheading': ['clamp(1.25rem, 2vw, 1.6rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        glow: '0 0 90px -20px rgba(11,92,255,0.55)',
        'glow-sm': '0 0 40px -10px rgba(11,92,255,0.45)',
        card: '0 24px 60px -24px rgba(12,20,38,0.30)',
        'card-hover': '0 36px 90px -30px rgba(11,92,255,0.40)',
        'inner-line': 'inset 0 1px 0 0 rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(12,20,38,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(12,20,38,0.05) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
        'radial-brand': 'radial-gradient(60% 60% at 50% 40%, rgba(11,92,255,0.35) 0%, rgba(11,92,255,0) 70%)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-24px) translateX(10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)', opacity: '0.7' },
          '50%': { transform: 'translate3d(4%, -3%, 0) scale(1.08)', opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 11s ease-in-out infinite',
        shimmer: 'shimmer 2.4s linear infinite',
        marquee: 'marquee 28s linear infinite',
        'spin-slow': 'spin-slow 26s linear infinite',
        aurora: 'aurora 16s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.22,1,0.36,1) infinite',
      },
    },
  },
  plugins: [],
}
