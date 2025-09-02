/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
    },
  },
  plugins: [],
}
