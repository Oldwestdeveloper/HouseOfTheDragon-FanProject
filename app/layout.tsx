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
  // 1. Domínio deste projeto
  metadataBase: new URL('https://oldwestdeveloper-hotd.vercel.app'),
  title: "DRAGÕES TARGARYEN",
  description: "Catálogo interativo dos maiores dragões de Westeros e sua participação na Dança dos Dragões.",
  icons: { 
    icon: "/icon" // O Next.js mapeia o arquivo app/icon.png para esta rota
  },
  openGraph: {
    title: "DRAGÕES TARGARYEN",
    description: "Catálogo interativo dos maiores dragões de Westeros e sua participação na Dança dos Dragões.",
    url: "https://oldwestdeveloper-hotd.vercel.app",
    siteName: "DRAGÕES TARGARYEN",
    images: [
      {
        // 2. URL absoluta para o arquivo na pasta app
        // O Next.js serve arquivos de imagem da pasta app sem a extensão .png na URL final
        url: "https://oldwestdeveloper-hotd.vercel.app/opengraph-image", 
        width: 1200,
        height: 630,
        alt: "Preview Dragões Targaryen - Old West Developer",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DRAGÕES TARGARYEN",
    description: "Catálogo interativo dos maiores dragões de Westeros e sua participação na Dança dos Dragões.",
    images: ["https://oldwestdeveloper-hotd.vercel.app/opengraph-image"],
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

