import Link from 'next/link'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-green-50">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-4">
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
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-6 py-8">
        {children}
      </main>
      <footer className="bg-white mt-12 shadow-inner">
        <div className="container mx-auto px-6 py-4 text-center text-gray-600">
          <p className="text-sm">
            © {new Date().getFullYear()} Resources For Kids. This website is in beta and intended for testing purposes only.
          </p>
          <p className="text-xs mt-2">
            Please consult a healthcare professional for medical advice.
          </p>
        </div>
      </footer>
    </div>
  )
}