import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Facebook, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-green-800">TecnoRecycling</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-green-800 hover:text-green-600 transition-colors">Inicio</a>
            <a href="#servicios" className="text-green-800 hover:text-green-600 transition-colors">Servicios</a>
            <a href="#proceso" className="text-green-800 hover:text-green-600 transition-colors">Proceso</a>
            <a href="#beneficios" className="text-green-800 hover:text-green-600 transition-colors">Beneficios</a>
            <a href="#contacto" className="text-green-800 hover:text-green-600 transition-colors">Contacto</a>
            <div className="flex space-x-2">
              <a 
                href="https://www.facebook.com/profile.php?id=61562424808013" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-800 hover:text-green-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/tecnorecyclingpty" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-800 hover:text-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-green-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-4 pb-4">
              <a 
                href="#inicio" 
                className="text-green-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                className="text-green-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </a>
              <a 
                href="#proceso" 
                className="text-green-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Proceso
              </a>
              <a 
                href="#beneficios" 
                className="text-green-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Beneficios
              </a>
              <a 
                href="#contacto" 
                className="text-green-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="https://www.facebook.com/profile.php?id=61562424808013" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-800 hover:text-green-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/tecnorecyclingpty" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-800 hover:text-green-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;