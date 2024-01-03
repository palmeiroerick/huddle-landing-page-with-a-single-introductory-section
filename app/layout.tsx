import "@/style/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { openSans, poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Huddle Landing Page With a Single Introductory Section",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${openSans.variable} bg-mobile h-screen w-screen bg-violet bg-top bg-no-repeat`}
    >
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
