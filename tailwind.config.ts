import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      /* Primary */
      violet: "#674baf",
      softMagenta: "#e882e8",
    },
    fontFamily: {
      poppins: "var(--poppins)",
      openSans: "var(--open-Sans)",
    },
    fontWeight: {
      normal: "400",
      semibold: "600",
    },
  },
  plugins: [],
};

export default config;
