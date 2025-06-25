import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "東大羅針盤 - 君の「好き」を、人生の羅針盤に。",
  description: "挑戦者のためのコミュニティ。メンバー一人ひとりが人生の航路を自ら見出すための「羅針盤」となる場所。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
