import { ReactNode } from 'react'
import Link from 'next/link'
import { ThemeProvider } from "@/components/theme-provider"
import { Star, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Star className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-lg text-blue-600">CSHCN Resources</span>
          </Link>
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/submit" className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-200">
                Submit a Resource
              </Link>
            </li>
          </ul>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-black" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-white dark:bg-gray-800 mt-12 shadow-inner">
          <div className="container mx-auto px-6 py-4 text-center text-gray-600 dark:text-gray-300">
            <p className="text-sm">
              © {new Date().getFullYear()} Resources For Kids. This website is in beta and intended for testing purposes only.
            </p>
            <p className="text-xs mt-2">
              Please consult a healthcare professional for medical advice.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}