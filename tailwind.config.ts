import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          "tomato": "hsl(4, 100%, 67%)",
        },
        neutral: {
          "white": "hsl(0, 0%, 100%)",
          "grey": "hsl(231, 7%, 60%)",
          "charcoal-grey": "hsl(235, 18%, 26%)",
          "dark-slate-grey": "hsl(234, 29%, 20%)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
