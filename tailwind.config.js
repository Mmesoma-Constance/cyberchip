/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mdMd: "900px",
        mdXl: "974px",
        lgSm: "1240px",
        lgXl: "1270px",
      },
    },
  },
  plugins: [],
};
