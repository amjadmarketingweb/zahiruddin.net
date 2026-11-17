import type { Metadata } from "next";
import localFont from "next/font/local";
import Navigation from "@/components/Navigation";
import Motion from "@/components/Motion";
import "./globals.css";
const manrope = localFont({
  src: "../../public/fonts/manrope-latin.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://zahiruddin.net"),
  title:
    "Muhammad Zahiruddin | Executive Leadership, Education & Business Growth",
  description:
    "Explore the executive portfolio of Muhammad Zahiruddin, specialising in education business development, TVET, institutional growth, digital business, strategic partnerships and organisational leadership.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_MY",
    siteName: "Muhammad Zahiruddin",
    url: "https://zahiruddin.net",
    title: "Muhammad Zahiruddin | Education. Enterprise. Leadership.",
    description:
      "Building Institutions. Developing Talent. Accelerating Growth.",
    images: [
      {
        url: "/images/social-card.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Zahiruddin — Education. Enterprise. Leadership.",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <Navigation />
        {children}
        <Motion />
      </body>
    </html>
  );
}
