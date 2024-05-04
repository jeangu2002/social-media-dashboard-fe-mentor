/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        youtube: "hsl(348, 97%, 39%)",
        "dark-blue": "hsl(230, 17%, 14%)",
        "very-dark-blue": "hsl(230, 17%, 14%)",
        "very-dark-blue-bg": "hsl(232, 19%, 15%)",
        "dark-desaturated-blue": "hsl(228, 28%, 20%)",
        "dark-desaturated-blue-hover": "hsl(228, 24%, 39%)",
        "desaturate-blue": " hsl(228, 34%, 66%)",
        "very-pale-blue": "hsl(230, 17%, 14%)",
        "light-grayish-blue": "hsl(227, 47%, 96%)",
        "light-grayish-blue-hover": "hsl(227, 6%, 84%)",
        "text-dark-blue": "hsl(230, 17%, 14%)",
        "bg-toggle-track": "hsl(232 , 23%, 74%)",

      },
      backgroundImage: {
        "gradient-instagram": "linear-gradient(90deg, hsl(37, 97%, 70%),hsl(329, 70%, 58%))",
        "gradient-toggle": "linear-gradient(90deg,hsl(210, 78%, 56%), hsl(146, 68%, 55%))"
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit,minmax(200px,1fr))"
      },
      fontFamily: {
        'inter': "Inter, sans-serif"
      }
    },
   
  },
  plugins: [], 
}

