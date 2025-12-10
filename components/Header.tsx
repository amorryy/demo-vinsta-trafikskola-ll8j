'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-700">
            Vinsta Trafikskola
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hem" className="text-gray-700 hover:text-blue-700 transition-colors">Hem</a>
            <a href="#tjanster" className="text-gray-700 hover:text-blue-700 transition-colors">Tjänster</a>
            <a href="#om-oss" className="text-gray-700 hover:text-blue-700 transition-colors">Om oss</a>
            <a href="#kontakt" className="text-gray-700 hover:text-blue-700 transition-colors">Kontakt</a>
            <a href="tel:01266163" className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              012-66 163
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Öppna meny"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a 
                href="#hem" 
                className="text-gray-700 hover:text-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hem
              </a>
              <a 
                href="#tjanster" 
                className="text-gray-700 hover:text-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tjänster
              </a>
              <a 
                href="#om-oss" 
                className="text-gray-700 hover:text-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Om oss
              </a>
              <a 
                href="#kontakt" 
                className="text-gray-700 hover:text-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </a>
              <a 
                href="tel:01266163" 
                className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-4 w-4 mr-2" />
                Ring: 012-66 163
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}