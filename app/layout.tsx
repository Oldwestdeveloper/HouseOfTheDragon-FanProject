import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local"; 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gotFont = localFont({
  src: "./font/GOT.ttf",
  variable: "--font-got",
  display: "swap",
});

export const metadata: Metadata = {
  // 1. OBRIGATÓRIO: O endereço do seu site para o Next.js gerar os links da imagem
  metadataBase: new URL('https://oldwestdeveloper-hotd.vercel.app'),
  
  title: "DRAGÕES TARGARYEN",
  description: "Catálogo interativo dos maiores dragões de Westeros.",
  
  // 2. O Next.js detecta o icon.png e o opengraph-image.png na pasta app sozinho.
  // Não precisamos colocar o caminho da imagem manualmente aqui dentro.
  openGraph: {
    title: "DRAGÕES TARGARYEN",
    description: "Catálogo interativo dos maiores dragões de Westeros.",
    url: "https://oldwestdeveloper-hotd.vercel.app",
    siteName: "DRAGÕES TARGARYEN",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} ${gotFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
