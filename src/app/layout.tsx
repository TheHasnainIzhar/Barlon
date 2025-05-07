import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import "../styles/main/layout.main.css"
import "../styles/color-plates/color-plate.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home || Barlon",
  icons: {
    icon: "/favicon.ico",
  },
  description: "By Barlon Corporation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} app-layout`}>
        <main className="main-layout">
          <section className="layout-elements">
            <nav className="navigation-bar">
              <Navbar  />
            </nav>
            <section className="app-page-view">
              {children}
            </section>
            <footer className="footer-layout">
              <Footer />
            </footer>
          </section>
        </main>
      </body>
    </html>
  );
}
