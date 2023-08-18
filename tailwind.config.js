const { getIconCollections, iconsPlugin } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    iconsPlugin({
      collections: getIconCollections('all'),
    }),
  ],
  /**
   * Pick two themes from DaisyUI, and specify the dark theme name in `darkMode` field,
   * and also explicitly set that dark theme name in `daisyui.darkTheme` field.
   */
  darkMode: ['class', '[data-theme="business"]'],
  daisyui: {
    themes: [
      'bumblebee', 'business',
    ],
    darkTheme: 'business',
  },
}
