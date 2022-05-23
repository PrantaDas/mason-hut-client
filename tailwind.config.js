module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner':"url('/src/assets/images/banner.jpg')",
    },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00f5d4",
          secondary: "#ff006e",
          info:"#ef476f",
          success:"#3d5a80",
          accent: "#9b5de5",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",    
    ],
  },
  plugins: [require("daisyui")],
}