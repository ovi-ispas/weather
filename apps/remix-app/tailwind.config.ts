import type { Config } from 'tailwindcss'
import uiLib from '../../packages/ui-lib/tailwind.config.js'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [uiLib as Partial<Config>],
  content: [
    '../../packages/ui-lib/lib/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
