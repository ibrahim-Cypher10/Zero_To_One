import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata, Viewport } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://zero-to-one-cs.vercel.app'),
  title: "Zero to One: Computer Science Foundations | Edvance x CodeKids",
  description: "Launch your computer science journey with confidence. A comprehensive intensive course designed for absolute beginners. Master Scratch, Python, and build full-stack apps with Vibecoding.",
  keywords: ["computer science", "programming", "coding bootcamp", "beginner programming", "CS101", "Python", "Scratch", "full-stack", "Vibecoding", "university prep"],
  authors: [{ name: "Edvance x CodeKids" }],
  creator: "Edvance x CodeKids",
  publisher: "Edvance x CodeKids",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/rocket-icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: "/rocket-icon.svg",
  },
  openGraph: {
    title: "Zero to One: Computer Science Foundations",
    description: "Launch your computer science journey with confidence. From absolute beginner to CS-ready.",
    type: "website",
    siteName: "Zero to One CS Course",
    images: [
      {
        url: "/rocket-icon.svg",
        width: 32,
        height: 32,
        alt: "Zero to One CS Course Rocket Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Zero to One: Computer Science Foundations",
    description: "Launch your computer science journey with confidence. From absolute beginner to CS-ready.",
    images: ["/rocket-icon.svg"],
  },
  generator: 'Next.js',
  applicationName: 'Zero to One CS Course',
  referrer: 'origin-when-cross-origin',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#10b981',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/rocket-icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/rocket-icon.svg" />
        <meta name="theme-color" content="#10b981" />
        <meta name="msapplication-TileColor" content="#10b981" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
