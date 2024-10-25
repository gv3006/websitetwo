'use client'

import { ReactNode, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeProvider } from "@/components/theme-provider"
import { Star, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"

function Header({ isHomePage, isDarkMode, onThemeToggle }: { isHomePage: boolean; isDarkMode: boolean; onThemeToggle: () => void }) {
  return (
    <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md sticky top-0 z-50 transition-colors duration-200`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Star className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-blue-600'}`}>CSHCN Resources</span>
          </Link>
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-semibold text-lg transition-colors duration-200`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-semibold text-lg transition-colors duration-200`}>
                About
              </Link>
            </li>
            <li>
              <Link href="/submit" className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-semibold text-lg transition-colors duration-200`}>
                Submit a Resource
              </Link>
            </li>
          </ul>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={onThemeToggle}
            className={isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}
          >
            <Sun className={`h-5 w-5 transition-all ${isDarkMode ? 'scale-0' : 'scale-100'}`} />
            <Moon className={`absolute h-5 w-5 transition-all ${isDarkMode ? 'scale-100' : 'scale-0'}`} />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleThemeToggle = () => {
    if (isHomePage) {
      setIsDarkMode(prev => !prev)
    }
  }

  return (
    <ThemeProvider attribute="class" forcedTheme={isHomePage && isDarkMode ? "dark" : "light"} enableSystem={false}>
      <div className={`min-h-screen flex flex-col ${isHomePage ? 'bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800' : 'bg-white'}`}>
        <Header isHomePage={isHomePage} isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle} />
        <main className="flex-grow mt-[-64px] pt-[64px]">
          {children}
        </main>
        <footer className={`${isHomePage ? 'bg-white dark:bg-gray-800' : 'bg-white'} mt-12 shadow-inner`}>
          <div className={`container mx-auto px-6 py-4 text-center ${isHomePage ? 'text-gray-600 dark:text-gray-300' : 'text-gray-600'}`}>
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