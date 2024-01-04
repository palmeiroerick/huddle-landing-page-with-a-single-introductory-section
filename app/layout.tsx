import "@/style/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { openSans, poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Huddle Landing Page With a Single Introductory Section",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body className="flex h-screen w-screen flex-col items-center justify-between bg-violet bg-mobile bg-contain bg-top bg-no-repeat p-9 lg:bg-desktop lg:bg-left">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
