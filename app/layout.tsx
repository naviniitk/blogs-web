import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Astro Blogs",
  description: "All the information on astronomy you can ask",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-[url('../public/milky-way-inverse.png')] bg-fixed bg-no-repeat bg-cover dark:text-timber dark:bg-[url('../public/milky-way.png')] text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="max-w-7xl mx-auto px-10">
                        <header>
              <div className="flex items-center justify-between flex-row-reverse p-5">
                <ModeToggle />
                <nav className="mr-auto text-xl font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
