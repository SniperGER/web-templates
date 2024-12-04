import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1720px',
        '4xl': '2160px',
      },
    },
  },
  plugins: [typography],
} satisfies Config;
