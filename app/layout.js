import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Studio Portfolio",
  description: "We build websites for local businesses to boost sales and simplify purchases.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ProgressBar />
        <Navbar />
        <main>{children}</main>
        <Projects />
        <About />
        <Reviews />
        <Footer />
      </body>
    </html>
  );
}
