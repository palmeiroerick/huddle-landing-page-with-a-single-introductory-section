import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Open_Sans, Poppins } from "next/font/google";

export const poppins: NextFontWithVariable = Poppins({
  weight: ["400", "600"],
  style: "normal",
  subsets: ["latin"],
  variable: "--poppins",
});

export const openSans: NextFontWithVariable = Open_Sans({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--open-Sans",
});
