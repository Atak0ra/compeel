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
        background: 'var(--color-paper)',
        surface: 'var(--color-surface)',
        'surface-2': 'var(--color-surface-deep)',
        foreground: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-clay)',
        'accent-deep': 'var(--color-clay-deep)',
        patina: 'var(--color-patina)',
        border: 'var(--color-rule)',
      },
      fontFamily: {
        sans: ['var(--font-studio)', 'sans-serif'],
        serif: ['var(--font-editorial)', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '0' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '0' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '0' }],
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
        'card': '0 0 0 1px var(--color-rule)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--color-ink)',
            maxWidth: '72ch',
            '--tw-prose-body': 'var(--color-ink)',
            '--tw-prose-headings': 'var(--color-ink)',
            '--tw-prose-links': 'var(--color-clay-deep)',
            '--tw-prose-bold': 'var(--color-ink)',
            '--tw-prose-counters': 'var(--color-muted)',
            '--tw-prose-bullets': 'var(--color-muted)',
            '--tw-prose-hr': 'var(--color-rule)',
            '--tw-prose-quotes': 'var(--color-ink)',
            '--tw-prose-quote-borders': 'var(--color-clay)',
            '--tw-prose-captions': 'var(--color-muted)',
            '--tw-prose-code': 'var(--color-ink)',
            '--tw-prose-pre-code': 'var(--color-ink)',
            '--tw-prose-pre-bg': 'var(--color-surface)',
            '--tw-prose-th-borders': 'var(--color-rule)',
            '--tw-prose-td-borders': 'var(--color-rule)',
            h1: { fontFamily: 'var(--font-editorial), serif', letterSpacing: '0' },
            h2: { fontFamily: 'var(--font-editorial), serif', letterSpacing: '0' },
            h3: { fontFamily: 'var(--font-studio), sans-serif' },
            a: {
              color: 'var(--color-clay-deep)',
              textDecoration: 'underline',
              textDecorationColor: 'var(--color-rule)',
              '&:hover': { textDecorationColor: 'var(--color-clay-deep)' },
            },
            blockquote: {
              borderLeftColor: 'var(--color-clay)',
              fontStyle: 'normal',
              color: 'var(--color-ink)',
            },
            code: {
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-rule)',
              padding: '0.15em 0.4em',
              borderRadius: '3px',
              fontSize: '0.875em',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-rule)',
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
