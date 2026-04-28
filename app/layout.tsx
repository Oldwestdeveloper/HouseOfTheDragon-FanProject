import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local"; // Importação necessária para a fonte local
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configuração da sua fonte Game of Thrones
const gotFont = localFont({
  src: "./font/GOT.ttf",
  variable: "--font-got",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://oldwestdeveloper-hotd.vercel.app'),
  title: "DRAGÕES TARGARYEN",
  description;"Catálogo interativo dos maiores dragões de westeros e suas participação nas Dança dos Dragões. ",
  icons: {
    icon: "/icon.png"
  },
  openGraph: {
    title: "DRAGÕES TARGARYEN",
    description;"Catálogo interativo dos maiores dragões de westeros e suas participação nas Dança dos Dragões. ",
    url: "https://oldwestdeveloper-hotd.vercel.app",
    siteName: "DRAGÕES TARGARYEN",
    images: [
      {
        // Aqui está o segredo: o link completo e absoluto!
        url: "https://oldwestdeveloper-portfolio.vercel.app/img/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Imagem compartilhada HOTD - Old West Developer",
      },
    ],
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
      <body
        // Injetamos a variável gotFont.variable aqui junto com as outras
        className={`${geistSans.variable} ${geistMono.variable} ${gotFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
