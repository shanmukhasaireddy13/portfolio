/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': {
            50: '#f0f1ff',
            100: '#e4e6ff',
            200: '#cdd1ff',
            300: '#a6acff',
            400: '#7b82ff',
            500: '#5f6FFF',
            600: '#4338ca',
            700: '#3730a3',
            800: '#312e81',
            900: '#1e1b4b',
          },
          'secondary': {
            50: '#fdf4ff',
            100: '#fae8ff',
            200: '#f5d0fe',
            300: '#f0abfc',
            400: '#e879f9',
            500: '#d946ef',
            600: '#c026d3',
            700: '#a21caf',
            800: '#86198f',
            900: '#701a75',
          },
          'accent': {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
          },
          'dark': {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
          },
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
        },
        fontFamily: {
          'sans': ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
          'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
          'display': ['Clash Display', 'Inter', 'sans-serif'],
        },
        fontSize: {
          'xs': ['0.75rem', { lineHeight: '1rem' }],
          'sm': ['0.875rem', { lineHeight: '1.25rem' }],
          'base': ['1rem', { lineHeight: '1.5rem' }],
          'lg': ['1.125rem', { lineHeight: '1.75rem' }],
          'xl': ['1.25rem', { lineHeight: '1.75rem' }],
          '2xl': ['1.5rem', { lineHeight: '2rem' }],
          '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
          '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
          '5xl': ['3rem', { lineHeight: '1' }],
          '6xl': ['3.75rem', { lineHeight: '1' }],
          '7xl': ['4.5rem', { lineHeight: '1' }],
          '8xl': ['6rem', { lineHeight: '1' }],
          '9xl': ['8rem', { lineHeight: '1' }],
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'fade-in-up': 'fadeInUp 0.5s ease-out',
          'fade-in-down': 'fadeInDown 0.5s ease-out',
          'fade-in-left': 'fadeInLeft 0.5s ease-out',
          'fade-in-right': 'fadeInRight 0.5s ease-out',
          'slide-up': 'slideUp 0.5s ease-out',
          'slide-down': 'slideDown 0.5s ease-out',
          'scale-in': 'scaleIn 0.3s ease-out',
          'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
          'float': 'float 3s ease-in-out infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
          'shimmer': 'shimmer 2s linear infinite',
          'gradient-x': 'gradientX 15s ease infinite',
          'gradient-y': 'gradientY 15s ease infinite',
          'gradient-xy': 'gradientXY 15s ease infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeInDown: {
            '0%': { opacity: '0', transform: 'translateY(-30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeInLeft: {
            '0%': { opacity: '0', transform: 'translateX(-30px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          fadeInRight: {
            '0%': { opacity: '0', transform: 'translateX(30px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          slideUp: {
            '0%': { transform: 'translateY(100%)' },
            '100%': { transform: 'translateY(0)' },
          },
          slideDown: {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(0)' },
          },
          scaleIn: {
            '0%': { transform: 'scale(0.9)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
          bounceGentle: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          glow: {
            '0%': { boxShadow: '0 0 5px rgba(95, 111, 255, 0.5)' },
            '100%': { boxShadow: '0 0 20px rgba(95, 111, 255, 0.8), 0 0 30px rgba(95, 111, 255, 0.6)' },
          },
          shimmer: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(100%)' },
          },
          gradientX: {
            '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
            '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
          },
          gradientY: {
            '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'center top' },
            '50%': { 'background-size': '200% 200%', 'background-position': 'center bottom' },
          },
          gradientXY: {
            '0%, 100%': { 'background-size': '400% 400%', 'background-position': 'left center' },
            '50%': { 'background-size': '400% 400%', 'background-position': 'right center' },
          },
        },
        backdropBlur: {
          'xs': '2px',
        },
        boxShadow: {
          'glow': '0 0 20px rgba(95, 111, 255, 0.5)',
          'glow-lg': '0 0 30px rgba(95, 111, 255, 0.6)',
          'inner-glow': 'inset 0 0 20px rgba(95, 111, 255, 0.2)',
          'soft': '0 2px 40px rgba(0, 0, 0, 0.1)',
          'soft-lg': '0 10px 60px rgba(0, 0, 0, 0.15)',
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)',
        },
        gridTemplateColumns: {
            'auto': 'repeat(auto-fill, minmax(200px, 1fr))'
        },
        spacing: {
          '18': '4.5rem',
          '88': '22rem',
          '128': '32rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      },
    },
    plugins: [],
  }
