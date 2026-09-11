import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

const siteUrl = "https://touqeer-ahmad.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Touqeer Ahmad — Software Engineer | iOS, Android & React Native",
  description:
    "Portfolio of Touqeer Ahmad, a Software Engineer with 4+ years building seamless mobile and web experiences across iOS (Swift, SwiftUI), Android (Kotlin), React Native, and the MERN stack.",
  keywords: [
    "Touqeer Ahmad",
    "Software Engineer",
    "iOS Developer",
    "Swift",
    "SwiftUI",
    "Android",
    "Kotlin",
    "React Native",
    "MERN Stack",
    "Node.js",
    "Mobile Developer",
  ],
  authors: [{ name: "Touqeer Ahmad" }],
  creator: "Touqeer Ahmad",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Touqeer Ahmad — Software Engineer",
    description:
      "Building seamless experiences across platforms — iOS, Android, React Native, and full-stack web.",
    siteName: "Touqeer Ahmad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Touqeer Ahmad — Software Engineer",
    description:
      "Building seamless experiences across platforms — iOS, Android, React Native, and full-stack web.",
  },
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: "#0a0f1c",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
