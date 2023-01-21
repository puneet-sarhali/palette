/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.6rem'
      },
      colors: {
        "my-primary": {
          100: "var(--my-primary-100)",
          200: "var(--my-primary-200)",
          300: "var(--my-primary-300)",
          400: "var(--my-primary-400)",
          500: "var(--my-primary-500)",
          600: "var(--my-primary-600)",
          700: "var(--my-primary-700)",
          800: "var(--my-primary-800)",
          900: "var(--my-primary-900)",
        },
        "my-accent": {
          100: "var(--my-accent-100)",
          200: "var(--my-accent-200)",
          300: "var(--my-accent-300)",
          400: "var(--my-accent-400)",
          500: "var(--my-accent-500)",
          600: "var(--my-accent-600)",
          700: "var(--my-accent-700)",
          800: "var(--my-accent-800)",
          900: "var(--my-accent-900)",
        },
        "my-gray": {
          100: "var(--my-gray-100)",
          200: "var(--my-gray-200)",
          300: "var(--my-gray-300)",
          400: "var(--my-gray-400)",
          500: "var(--my-gray-500)",
          600: "var(--my-gray-600)",
          700: "var(--my-gray-700)",
          800: "var(--my-gray-800)",
          900: "var(--my-gray-900)",
        },
        "my-confirm": {
          100: "var(--my-success-100)",
          200: "var(--my-success-200)",
          300: "var(--my-success-300)",
          400: "var(--my-success-400)",
          500: "var(--my-success-500)",
          600: "var(--my-success-600)",
          700: "var(--my-success-700)",
          800: "var(--my-success-800)",
          900: "var(--my-success-900)",
        },
        "my-warning": {
          100: "var(--my-warning-100)",
          200: "var(--my-warning-200)",
          300: "var(--my-warning-300)",
          400: "var(--my-warning-400)",
          500: "var(--my-warning-500)",
          600: "var(--my-warning-600)",
          700: "var(--my-warning-700)",
          800: "var(--my-warning-800)",
          900: "var(--my-warning-900)",
        },
        "my-error": {
          100: "var(--my-error-100)",
          200: "var(--my-error-200)",
          300: "var(--my-error-300)",
          400: "var(--my-error-400)",
          500: "var(--my-error-500)",
          600: "var(--my-error-600)",
          700: "var(--my-error-700)",
          800: "var(--my-error-800)",
          900: "var(--my-error-900)",
        }
      }
    },
  },
  plugins: [require("daisyui")],
}
