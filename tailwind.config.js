/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media', // Enable dark mode based on system preference
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Libre Baskerville', 'Georgia', 'serif'],
        'heading': ['Libre Baskerville', 'Georgia', 'serif'],
        'display': ['Libre Baskerville', 'Georgia', 'serif'],
        'body': ['Libre Baskerville', 'Georgia', 'serif'],
        'serif': ['Libre Baskerville', 'Georgia', 'serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        // Custom colors that work with CSS variables
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        lavender: 'var(--lavender)',
        'purple-light': 'var(--purple-light)',
        'purple-medium': 'var(--purple-medium)',
        'purple-dark': 'var(--purple-dark)',
      },
    },
  },
  plugins: [],
}
