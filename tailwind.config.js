/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#08090C',
          surface: '#0F1117',
          border: '#1F2433',
          card: '#0B0D12',
          subtle: '#141824',
          gold: '#E5A93C',
          cobalt: '#3B82F6',
          terracotta: '#E05A47',
          purple: '#8B5CF6',
          teal: '#0D9488',
          slate: '#94A3B8'
        },
        neutral: {
          850: '#1b1d24'
        }
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif']
      }
    }
  },
  plugins: [],
}
