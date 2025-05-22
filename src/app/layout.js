import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';
import { Poppins } from "next/font/google";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const moonwalk = localFont({
  src: "../fonts/MoonWalk.ttf",
  variable: '--font-moonwalk',
  display: 'swap',
});


const geistSans = Geist({
  // variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  // variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hrishita Bhandari",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${moonwalk.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
