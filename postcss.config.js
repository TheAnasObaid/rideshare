module.exports = {
  plugins: {
    tailwindcss: {
          content: [
        "./pages/**/*.{html,js,ts,jsx,tsx}",
        "./components/**/*.{html,js,ts,jsx,tsx}",
        // "./app/**/*.{html,js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    },
    autoprefixer: {},
  },
}