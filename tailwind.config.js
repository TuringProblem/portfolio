/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Enable dark mode using the data-theme attribute
  // This allows you to use dark: prefixes in Tailwind classes
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      // You can extend Tailwind's theme here with your custom colors
      // that match your CSS variables. This allows you to use:
      // bg-bg-primary, text-text-primary, border-border, etc.
      colors: {
        // These will use CSS variables so they work with your theme system
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
      },
    },
  },
  plugins: [],
}

