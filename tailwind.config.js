module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#EEB76B",

          secondary: "#E2703A",

          accent: "#310B0B",

          neutral: "#9C3D54",

          "base-100": "#FFFFFF",

          info: "#4AA8BF",

          success: "#66BB6A",

          warning: "#EF8234",

          error: "#EA4034",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
