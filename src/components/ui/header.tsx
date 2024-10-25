'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Heart, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Heart className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              CSHCN Resources
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className={`transition-colors hover:text-foreground/80 ${pathname === '/' ? 'text-foreground' : 'text-foreground/60'}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors hover:text-foreground/80 ${pathname === '/about' ? 'text-foreground' : 'text-foreground/60'}`}
            >
              About
            </Link>
            <Link
              href="/submit"
              className={`transition-colors hover:text-foreground/80 ${pathname === '/submit' ? 'text-foreground' : 'text-foreground/60'}`}
            >
              Submit a Resource
            </Link>
          </nav>
        </div>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          className="ml-auto"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}