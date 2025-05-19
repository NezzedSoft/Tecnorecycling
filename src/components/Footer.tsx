import React from 'react';
import { Facebook, Instagram, Mail, Phone, Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-white mr-2" />
              <span className="text-xl font-bold">TecnoRecycling</span>
            </div>
            <p className="text-green-100 mb-4">
              Empresa dedicada al reciclaje responsable de equipos electrónicos y tecnológicos, 
              contribuyendo a la protección del medio ambiente.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61562424808013" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-green-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/tecnorecyclingpty" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-green-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:Tecnorecyclingpty@gmail.com" 
                className="text-white hover:text-green-300 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://wa.me/50761905805" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-green-300 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-600 pb-2">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-green-100 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-green-100 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#proceso" className="text-green-100 hover:text-white transition-colors">Proceso</a></li>
              <li><a href="#beneficios" className="text-green-100 hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#contacto" className="text-green-100 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-600 pb-2">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-green-100">Reciclaje de equipos electrónicos</li>
              <li className="text-green-100">Destrucción de datos</li>
              <li className="text-green-100">Recolección a domicilio</li>
              <li className="text-green-100">Certificados de reciclaje</li>
              <li className="text-green-100">Asesoría ambiental</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-600 pb-2">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="text-green-300 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-green-100">+507 6190 5805</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-green-300 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-green-100">Tecnorecyclingpty@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg className="text-green-300 mr-2 mt-1 flex-shrink-0 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-green-100">Centro de acopio Almacenajes y depósito vista hermosa</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-600 pt-6">
          <p className="text-center text-green-100">
            &copy; {new Date().getFullYear()} TecnoRecycling. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;