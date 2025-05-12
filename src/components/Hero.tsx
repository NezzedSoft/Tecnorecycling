import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-24 pb-20 md:pt-40 md:pb-28">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/128421/pexels-photo-128421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Electronic circuits" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Give Your Old Electronics a <span className="text-green-400">New Life</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Soluciones de reciclaje responsable para sus residuos electrónicos. 
            Proteja el medio ambiente desechando de forma segura sus equipos obsoletos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contacto" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors text-center"
            >
              Reciclar Ahora
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;