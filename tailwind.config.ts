import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", ...fontFamily.sans],
        merienda: ["Merienda", ...fontFamily.serif],
      },
      colors: {
        rose: {
          990: "var(--color-rose-990)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
