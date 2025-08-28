import "./globals.css";
import Navbar from "./components/Navbar";
import { Outfit } from "next/font/google";
import Footer from "./components/Footer";
import CustomLayout from "./components/CustomLayout";
import Script from "next/script";



const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-outfit",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="-utS8nJGj2qM6X7DbLzshlGhBMPtOsJdxRvhb0DA2ik"
        />
      </head>
      <body className={outfit.className}>
        <CustomLayout>{children}</CustomLayout>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SF7B745CLW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SF7B745CLW');
          `}
        </Script>
      </body>
    </html>
  );
}
