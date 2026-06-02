import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#141414',
        'surface-2': '#1C1C1C',
        foreground: '#F5F0E8',
        muted: '#8A8070',
        accent: '#C4622D',
        'accent-light': '#D4784A',
        ocre: '#8B6914',
        border: '#2A2520',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-dm-serif)', 'Georgia', 'serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'prose-wide': '72ch',
      },
      borderRadius: {
        'sm': '4px',
        DEFAULT: '6px',
        'md': '8px',
        'lg': '12px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#F5F0E8',
            maxWidth: '72ch',
            '--tw-prose-body': '#F5F0E8',
            '--tw-prose-headings': '#F5F0E8',
            '--tw-prose-links': '#C4622D',
            '--tw-prose-bold': '#F5F0E8',
            '--tw-prose-counters': '#8A8070',
            '--tw-prose-bullets': '#8A8070',
            '--tw-prose-hr': '#2A2520',
            '--tw-prose-quotes': '#F5F0E8',
            '--tw-prose-quote-borders': '#C4622D',
            '--tw-prose-captions': '#8A8070',
            '--tw-prose-code': '#F5F0E8',
            '--tw-prose-pre-code': '#F5F0E8',
            '--tw-prose-pre-bg': '#141414',
            '--tw-prose-th-borders': '#2A2520',
            '--tw-prose-td-borders': '#2A2520',
            h1: { fontFamily: 'var(--font-dm-serif), Georgia, serif' },
            h2: { fontFamily: 'var(--font-dm-serif), Georgia, serif' },
            h3: { fontFamily: 'var(--font-dm-serif), Georgia, serif' },
            a: {
              color: '#C4622D',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            },
            blockquote: {
              borderLeftColor: '#C4622D',
              fontStyle: 'italic',
            },
            code: {
              backgroundColor: '#141414',
              padding: '0.2em 0.4em',
              borderRadius: '4px',
              fontSize: '0.875em',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
