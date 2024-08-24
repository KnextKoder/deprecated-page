import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { cn } from "@/lib/utils"


const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Rubix Class",
  description: "The Landing Page for Rubix Classroom",
  keywords: [
    "rubix",
    "RubixClass",
    "rubix class",
    "ai tutor",
    "ai tutoring",
    "educational AI",
    "artificial intelligence in education",
    "artificial intelligence and education",
    "AI for schools",
    "ai university",
    "artificial intelligence in schools",
    "artificial intelligence on education",
    "artificial intelligence in the classroom",
    "ai for teaching",
    "ai and education",
  ],
  creator: "Marvelous Adesina",
  publisher: "Marvelous Adesina",
  generator: "Next.js",
  applicationName: "Rubix Class"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
