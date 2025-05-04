/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#E6C9BB",
          DEFAULT: "hsl(var(--primary))",
          dark: "#B47F6B",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          light: "#F9F5F2",
          DEFAULT: "hsl(var(--secondary))",
          dark: "#E8DFD8",
          foreground: "hsl(var(--secondary-foreground))",
        },
        text: {
          DEFAULT: "#433A36",
          light: "#FFFFFF",
        },
        accent: {
          success: "#85A68E",
          error: "#D17F6E",
          warning: "#DEB876",
          blue: "#A6BBD1",
          sage: "#C0CEB2",
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        DEFAULT: "8px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
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
  plugins: [require("tailwind-scrollbar-hide"), require("tailwindcss-animate")],
};
