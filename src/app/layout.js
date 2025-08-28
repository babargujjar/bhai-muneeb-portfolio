import "./globals.css";
import Navbar from "./components/Navbar";
import { Outfit } from "next/font/google";
import Footer from "./components/Footer";
import CustomLayout from "./components/CustomLayout";



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
      </body>
    </html>
  );
}
