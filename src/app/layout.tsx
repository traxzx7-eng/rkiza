import type { Metadata } from "next";
import { Tajawal, IBM_Plex_Sans_Arabic } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const tajawal = Tajawal({ 
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal"
});

const ibmPlex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex"
});

export const metadata: Metadata = {
  title: "الركيزة الدائمة",
  description: "استشارات استراتيجية واستشارات استثمارية لجيل جديد من الأعمال الليبية.",
  openGraph: {
    title: "الركيزة الدائمة",
    description: "استشارات استراتيجية واستشارات استثمارية لجيل جديد من الأعمال الليبية.",
    locale: "ar_LY",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${tajawal.variable} ${ibmPlex.variable} font-sans antialiased`}>
        <NavBar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
