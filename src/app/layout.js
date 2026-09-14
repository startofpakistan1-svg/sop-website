import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";

export const metadata = {
  title: "SOP — eCommerce & Digital Solutions | Start of Pakistan",
  description:
    "SOP helps brands sell on Amazon, eBay, Walmart, Etsy and Shopify — plus custom websites and AI assistants. Based in Jhelum, Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Ticker />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}