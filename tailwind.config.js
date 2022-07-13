/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "waves" : "url('/src/resources/backround_wave.svg')"
      },
      aspectRatio: {
        "960/300": "960/300"
      },
      boxShadow: {
        "headershadow" : "0px 0.3px 1.4px rgba(0, 0, 0, 0.03), 0px 1px 3.1px rgba(0, 0, 0, 0.047), 0px 2.1px 5.3px rgba(0, 0, 0, 0.061), 0px 3.8px 8.2px rgba(0, 0, 0, 0.073), 0px 6px 10.2px rgba(0, 0, 0, 0.083)"
      }
    },
    colors: {
      primary: "rgb(21, 22, 26)",
      lightPrimary: "rgb(34, 36, 40)",
      secondary: "rgb(75, 69, 254)"
    }
  },
  plugins: [],
}
