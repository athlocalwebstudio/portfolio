import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for Next.js 13+
export const metadata = {
  title: "Local Web Studio",
  description:
    "We build websites for local businesses to boost sales and simplify purchases.",
  keywords: [
    "web development",
    "frontend developer",
    "Next.js",
    "React",
    "portfolio",
    "responsive websites",
    "local business websites",
  ],
  authors: [{ name: "AthLocalWebStudio" }],
  openGraph: {
    title: "Local Web Studio,Athens",
    description:
      "We build websites for local businesses to boost sales and simplify purchases.",
    url: "https://athlocalwebstudio.vercel.app/", // update after deployment
    siteName: "AthLocalWebStudio",
    images: [
      {
        url: "/images/local_web_studio_logo.png",
        width: 800,
        height: 600,
        alt: "AthLocalWebStudio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Web Studio,Athenns",
    description:
      "We build websites for local businesses to boost sales and simplify purchases.",
    images: ["/images/local_web_studio_logo.png"],
    creator: "@athwebstudio", 
  },
  icons: {
    icon: "/images/local_web_studio_logo.png", // small icon
    shortcut: "/images/local_web_studio_logo.png", // legacy support
    apple: "/images/local_web_studio_logo.png", // Apple touch icon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fallback meta for older browsers */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </head>
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