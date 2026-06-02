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
        background: '#F5F4F0',
        surface: '#EEECEA',
        'surface-2': '#E5E3DF',
        foreground: '#1A1A1A',
        muted: '#6B6560',
        accent: '#1A1A1A',
        'accent-light': '#3D3D3D',
        'accent-hover': '#000000',
        border: '#D8D5D0',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-dm-serif)', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
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
        'card': '0 0 0 1px #D8D5D0',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1A1A1A',
            maxWidth: '72ch',
            '--tw-prose-body': '#1A1A1A',
            '--tw-prose-headings': '#1A1A1A',
            '--tw-prose-links': '#1A1A1A',
            '--tw-prose-bold': '#1A1A1A',
            '--tw-prose-counters': '#6B6560',
            '--tw-prose-bullets': '#6B6560',
            '--tw-prose-hr': '#D8D5D0',
            '--tw-prose-quotes': '#1A1A1A',
            '--tw-prose-quote-borders': '#1A1A1A',
            '--tw-prose-captions': '#6B6560',
            '--tw-prose-code': '#1A1A1A',
            '--tw-prose-pre-code': '#1A1A1A',
            '--tw-prose-pre-bg': '#EEECEA',
            '--tw-prose-th-borders': '#D8D5D0',
            '--tw-prose-td-borders': '#D8D5D0',
            h1: { fontFamily: 'var(--font-dm-serif), Georgia, serif', letterSpacing: '-0.02em' },
            h2: { fontFamily: 'var(--font-dm-serif), Georgia, serif', letterSpacing: '-0.01em' },
            h3: { fontFamily: 'var(--font-dm-serif), Georgia, serif' },
            a: {
              color: '#1A1A1A',
              textDecoration: 'underline',
              textDecorationColor: '#D8D5D0',
              '&:hover': { textDecorationColor: '#1A1A1A' },
            },
            blockquote: {
              borderLeftColor: '#1A1A1A',
              fontStyle: 'normal',
              color: '#1A1A1A',
            },
            code: {
              backgroundColor: '#EEECEA',
              border: '1px solid #D8D5D0',
              padding: '0.15em 0.4em',
              borderRadius: '3px',
              fontSize: '0.875em',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: '#EEECEA',
              border: '1px solid #D8D5D0',
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
