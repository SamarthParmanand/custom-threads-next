import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        glassmorphism: '0 2px 30px 0 rgba(31, 38, 135, 0.07)',
      },
      backdropFilter: {
        'glassmorphism': 'blur(4px)',
      },
      borderOpacity: {
        'glassmorphism': '0.18',
      },
    },
  },
  plugins: [],
}
export default config
