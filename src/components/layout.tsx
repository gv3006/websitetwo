import Link from 'next/link'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-600 hover:text-blue-800 font-semibold">
                About
              </Link>
            </li>
            <li>
              <Link href="/submit" className="text-blue-600 hover:text-blue-800 font-semibold">
                Submit a Resource
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-8">
        {children}
      </main>
      <footer className="bg-white mt-12">
        <div className="container mx-auto px-6 py-3 text-center text-gray-600">
          © {new Date().getFullYear()} Special Needs Resources. All rights reserved.
        </div>
      </footer>
    </div>
  )
}