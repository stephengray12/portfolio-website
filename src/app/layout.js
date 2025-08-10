import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://stephen.engineering"),
  title: {
    default: "Stephen Gray",
    template: "%s | Stephen Gray",
  },
  description:
    "CS junior at UA Little Rock and building automation engineer transitioning into software engineering. React/Next.js, C++, Python.",
  openGraph: {
    title: "Stephen Gray",
    description:
      "CS junior at UA Little Rock and building automation engineer transitioning into software engineering. React/Next.js, C++, Python.",
    url: "https://stephen.engineering",
    siteName: "Stephen Gray",
    images: ["/opengraph-image"], // served by app/opengraph-image.js
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephen Gray",
    description:
      "CS junior at UA Little Rock and building automation engineer transitioning into software engineering.",
    images: ["/twitter-image"], // re-exports the OG image
  },
  themeColor: "#0ea5e9",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
