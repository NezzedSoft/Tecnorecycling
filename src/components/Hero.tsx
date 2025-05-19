import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-green-50 to-green-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 leading-tight">
              Damos nueva vida a la tecnología, <span className="text-green-600">protegiendo el planeta</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              En TecnoRecycling nos especializamos en el reciclaje responsable de equipos electrónicos, 
              contribuyendo a la economía circular y reduciendo el impacto ambiental de los residuos tecnológicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contacto" 
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 text-center shadow-lg hover:shadow-xl"
              >
                Contáctanos
              </a>
              <a 
                href="#servicios" 
                className="bg-white hover:bg-gray-50 text-green-700 font-medium py-3 px-6 rounded-lg border-2 border-green-600 transition-colors duration-300 text-center hover:bg-green-50"
              >
                Ver Servicios
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative">
              <img 
                src="/photo-1566843017081-a27f11f2bf05.avif" 
                alt="Reciclaje de equipos electrónicos" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-5 -right-5 bg-white py-3 px-6 rounded-lg shadow-lg">
                <p className="text-sm font-medium text-gray-800">Reciclamos más de</p>
                <p className="text-2xl font-bold text-green-600">2000+ dispositivos mensuales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;