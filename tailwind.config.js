const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Custom primary color
        'primary-dark': '#1D3557', // Darker shade for hover effects
      }
    }
  },
  plugins: [],
});
