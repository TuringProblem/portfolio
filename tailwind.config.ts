import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Enable dark mode using the data-theme attribute
  // This allows you to use dark: prefixes in Tailwind classes
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Custom colors using CSS variables for theme support
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        accent: 'var(--accent)',
        border: 'var(--border)',
        'active-text': 'var(--active-text)',
      },
    },
  },
  plugins: [],
};

export default config;

