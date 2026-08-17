import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "High Focus Training Consultancy (M) Sdn Bhd | OSH Training, Leadership & EHS Consultancy",
    template: "%s | High Focus Training Consultancy",
  },
  description:
    "High Focus Training Consultancy (M) Sdn Bhd — HRD Corp registered training provider for OSH training, leadership & management programmes, DOSH/DOE assessments and compliance consultancy. Sungai Petani, Kedah. Since 2001.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${plex.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
