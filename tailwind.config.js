/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        "primary-color": "#5EB9F0",
        "heading-color": "#343F52",
        "paragraph-color": "#60697B",
        skyblue: "#E5F4FD",
        white: "#ffffff",
        "light-gray": "#f0f8fe",
        gray: "#fefefe",
      }
    },
  },
  plugins: [],
};
