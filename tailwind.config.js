/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#E6C9BB", // Soft terracotta
          DEFAULT: "#D4A491", // Medium clay
          dark: "#B47F6B", // Deep clay
        },
        secondary: {
          light: "#F9F5F2", // Warm off-white
          DEFAULT: "#F2EAE4", // Clay-tinted white
          dark: "#E8DFD8", // Soft beige
        },
        text: {
          DEFAULT: "#433A36", // Warm dark brown
          light: "#FFFFFF", // White
        },
        accent: {
          success: "#85A68E", // Sage green
          error: "#D17F6E", // Terra cotta red
          warning: "#DEB876", // Warm gold/ochre
          blue: "#A6BBD1", // Soft ceramic blue
          sage: "#C0CEB2", // Light sage green
        },
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px",
        12: "48px",
        16: "64px",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,0.05)",
        DEFAULT: "0 2px 8px rgba(0,0,0,0.08)",
        lg: "0 4px 16px rgba(0,0,0,0.12)",
      },
      lineHeight: {
        DEFAULT: "1.5",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
