import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "../components/navbar";
import Provider from "./provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContextProvider } from "../context/context";
const montserrat = Montserrat({ subsets: ["latin"] });
import ico from "../../public/favicon.ico";

export const metadata: Metadata = {
  title: "Tonic Shop",
  description: "Generated by create next app",
  icons: [{ rel: "icon", url: ico.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Provider>
          <Navbar />
          <ToastContainer />
          {children}
        </Provider>
      </body>
    </html>
  );
}
