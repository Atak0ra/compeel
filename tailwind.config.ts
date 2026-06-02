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
        background: '#FAFAFA',
        surface: '#F2F2F2',
        'surface-2': '#EBEBEB',
        foreground: '#111111',
        muted: '#6B6B6B',
        accent: '#111111',
        'accent-light': '#333333',
        'accent-hover': '#000000',
        border: '#E5E5E5',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-dm-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
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
        'sm': '3px',
        DEFAULT: '5px',
        'md': '7px',
        'lg': '10px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)',
        'card': '0 0 0 1px #E5E5E5',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#111111',
            maxWidth: '72ch',
            '--tw-prose-body': '#111111',
            '--tw-prose-headings': '#111111',
            '--tw-prose-links': '#111111',
            '--tw-prose-bold': '#111111',
            '--tw-prose-counters': '#6B6B6B',
            '--tw-prose-bullets': '#6B6B6B',
            '--tw-prose-hr': '#E5E5E5',
            '--tw-prose-quotes': '#111111',
            '--tw-prose-quote-borders': '#111111',
            '--tw-prose-captions': '#6B6B6B',
            '--tw-prose-code': '#111111',
            '--tw-prose-pre-code': '#111111',
            '--tw-prose-pre-bg': '#F7F7F7',
            '--tw-prose-th-borders': '#E5E5E5',
            '--tw-prose-td-borders': '#E5E5E5',
            h1: { fontFamily: 'var(--font-dm-serif), Georgia, serif', letterSpacing: '-0.02em' },
            h2: { fontFamily: 'var(--font-dm-serif), Georgia, serif', letterSpacing: '-0.01em' },
            h3: { fontFamily: 'var(--font-dm-serif), Georgia, serif' },
            a: {
              color: '#111111',
              textDecoration: 'underline',
              textDecorationColor: '#E5E5E5',
              '&:hover': { textDecorationColor: '#111111' },
            },
            blockquote: {
              borderLeftColor: '#111111',
              fontStyle: 'normal',
              color: '#111111',
            },
            code: {
              backgroundColor: '#F7F7F7',
              border: '1px solid #E5E5E5',
              padding: '0.15em 0.4em',
              borderRadius: '3px',
              fontSize: '0.875em',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: '#F7F7F7',
              border: '1px solid #E5E5E5',
              borderRadius: '5px',
            },
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
