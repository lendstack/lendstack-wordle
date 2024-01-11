import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/context/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        flip: {
          'from': { transform: 'scale(1) rotateX(-180deg)', opacity: '1' },
          '50%': { transform: 'scale(1.1) rotateX(-90deg)', opacity: '.8' },
          'to': { transform: 'scale(1) rotateX(0)', opacity: '1' },
        },
        grow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'flip-card': 'flip 1s ease forwards',
        'grow': 'grow .4s ease',
      },
    },
  },
  plugins: [],
}
export default config;
