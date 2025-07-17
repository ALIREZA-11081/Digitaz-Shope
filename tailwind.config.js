module.exports = {
    content: ["./public/**/*.{html,js}"],
    darkMode:'media',
    theme: {
      extend: {
        fontFamily:{
            sans: ["vazirmatn"],
        }
      },
    },
    plugins: [
        require("@tailwindcss/forms")({
          strategy: 'base', // only generate global styles
          strategy: 'class', // only generate classes
        }),
      ],
  
  }