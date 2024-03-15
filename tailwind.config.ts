const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

// Define types for the function parameters
interface AddBaseFunction {
  (styles: Record<string, string>): void;
}

interface ThemeFunction {
  (path: string): Record<string, any>;
}

function addVariablesForColors({ addBase, theme }: { addBase: AddBaseFunction, theme: ThemeFunction }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.entries(allColors)
    .map(([key, val]) => `--${key}: ${val};`)
    .join('\n');

  addBase({
    ':root': newVars,
  });
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // You can add other theme extensions here if needed
    },
  },
  plugins: [
    addVariablesForColors,
    // Add other plugins if needed
  ],
};

// Export an empty object to make the file a module
export {};
