import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.startofpakistan.com"),
  title: "SOP — eCommerce & Digital Solutions | Start of Pakistan",
  description:
    "SOP helps brands sell on Amazon, eBay, Walmart, Etsy and Shopify — plus custom websites and AI assistants. Based in Jhelum, Pakistan.",
  openGraph: {
    title: "SOP — eCommerce & Digital Solutions",
    description:
      "Pakistan's first AI-powered eCommerce company. Marketplace setup, custom websites and AI assistants that scale your business.",
    url: "https://www.startofpakistan.com",
    siteName: "Start of Pakistan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SOP — Build, grow, and scale your business online",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "6qLJJ2E1ccPbBCQ5bwrXxsroJhwN4HD4rlCpoFDFNtE",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOP — eCommerce & Digital Solutions",
    description:
      "Pakistan's first AI-powered eCommerce company. Marketplace setup, custom websites and AI assistants.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Ticker />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-23QJE9T2F2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-23QJE9T2F2');
          `}
        </Script>
      </body>
    </html>
  );
}