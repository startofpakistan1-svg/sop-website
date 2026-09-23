import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import LinkTracker from "@/components/LinkTracker";
import ChatWidget from "@/components/ChatWidget";

export const metadata = {
  metadataBase: new URL("https://www.startofpakistan.com"),
  title: "SOP — eCommerce, Web & AI Solutions | Start of Pakistan",
  description:
    "SOP builds Shopify and WordPress stores, manages Amazon seller accounts, and designs AI agents — for clients across Pakistan, India, the UK and the US.",
  verification: {
    google: "6qLJJ2E1ccPbBCQ5bwrXxsroJhwN4HD4rlCpoFDFNtE",
  },
  openGraph: {
    title: "SOP — eCommerce, Web & AI Solutions",
    description:
      "Pakistan's first AI-powered eCommerce company. Marketplace accounts, custom stores and AI agents that scale your business.",
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
  twitter: {
    card: "summary_large_image",
    title: "SOP — eCommerce, Web & AI Solutions",
    description:
      "Pakistan's first AI-powered eCommerce company. Marketplace accounts, custom stores and AI agents.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-23QJE9T2F2"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-23QJE9T2F2');
          `}
        </Script>
        <Navbar />
        <Ticker />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ChatWidget />
        <ScrollReveal />
        <LinkTracker />
      </body>
    </html>
  );
}