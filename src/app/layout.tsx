import type { Metadata } from "next";
import { Geist, Geist_Mono, Nova_Square } from "next/font/google";
import "./globals.css";


const novaSquare = Nova_Square({
  variable: "--font-nova-square",
  subsets: ["latin"],
  weight: "400",  
  display: "swap"
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Otávio Cruz - Portfólio',
  description: 'Portfólio de desenvolvimento de Otávio Marques Cruz',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" style={{ height: '100%', margin: 0, padding: 0 }}>
      <body
      style={{ 
        height: '100%', 
        margin: 0, 
        padding: 0,
        overflow: 'auto'}}
        className={`${geistSans.variable} ${geistMono.variable} ${novaSquare.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
