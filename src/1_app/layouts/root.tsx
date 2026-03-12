import "../styles/globals.css"
import type { Metadata } from "next"

import { Footer } from "@widgets/footer"
import { Header } from "@widgets/header"

import { font } from "../styles/font"

export const metadata: Metadata = {
  description:
    "Виртуальный музей МАОУ СОШ 76 ЗАТО Северск — выставки, 3D-экспонаты и объявления",
  title: "Виртуальный музей — МАОУ СОШ 76",
}

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="light" lang="en">
      <body className={`${font.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
