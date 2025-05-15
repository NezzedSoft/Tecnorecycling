import React from 'react';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Reciclaje de Componentes",
      description: "Aceptamos tarjetas de video, procesadores y motherboards para un reciclaje adecuado.",
      image: "https://images.unsplash.com/photo-1610198965164-a704ae4e4c2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Dispositivos Móviles Reciclados",
      description: "Reciclamos teléfonos celulares y tablets de manera responsable y sostenible.",
      image: "https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Equipos de Red",
      description: "Reciclamos centrales telefónicas, equipos de red y telecomunicaciones de manera segura.",
      image: "https://images.unsplash.com/photo-1717667745852-a5bd6876c1de?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "Reciclaje electrónico Eficiente",
      description: "Ofrecemos soluciones para el reciclaje de equipos tecnológicos de RAEE / e-waste efectiva.",
      image: "https://images.unsplash.com/photo-1606718220923-fcb2abd9a778?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seguimos un enfoque integral y ambientalmente responsable para el reciclaje de dispositivos electrónicos, garantizando la máxima recuperación de recursos y el mínimo impacto ambiental.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-lg shadow-md w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  <span className="text-green-600 mr-2">{service.id}.</span> 
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a 
                  href="#contacto" 
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;