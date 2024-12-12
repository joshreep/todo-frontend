import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'dark-gray': '#0D0D0D',
        'background': '#1A1A1A',
        'foreground': '#262626',
        'light-gray': '#333333',
        'primary-text': '#F2F2F2',
        'secondary-text': '#808080',
        'primary': '#4EA8DE',
        'primary-dark': '#1E6F9F',
        'secondary': '#5E60CE',
        'secondary-dark': '#8284FA',
        'white': '#FFFFFF',
        'red': '#FF3B30',
        'orange': '#FF9500',
        'yellow': '#FFCC00',
        'green': '#34C759',
        'blue': '#007AFF',
        'indigo': '#5856D6',
        'purple': '#AF52DE',
        'pink': '#FF2D55',
        'brown': '#A2845E',
      },
      width: {
        '13': '3.25rem',
      },
      height: {
        '13': '3.25rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
