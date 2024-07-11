import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loja",
  description: "Desafio Loja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className},${serrat.className} h-screen bg-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
