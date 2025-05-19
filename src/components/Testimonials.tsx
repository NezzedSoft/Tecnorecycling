import React, { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  text: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Carlos Rodríguez",
      position: "Gerente de IT",
      company: "Empresa de Tecnología",
      text: "TecnoRecycling nos ha ayudado a gestionar de manera responsable nuestros residuos electrónicos. Su servicio es eficiente y nos proporcionan certificados que nos ayudan con nuestras políticas ambientales."
    },
    {
      name: "María Gómez",
      position: "Directora de Sostenibilidad",
      company: "Corporación Global",
      text: "Hemos trabajado con TecnoRecycling durante dos años y han sido un socio invaluable en nuestra estrategia de sostenibilidad. Su equipo es profesional y su proceso de reciclaje es transparente."
    },
    {
      name: "José Fernández",
      position: "Propietario",
      company: "Tienda de Electrónicos",
      text: "Como tienda de electrónicos, generamos bastantes residuos. TecnoRecycling nos ofrece una solución integral y nos ayuda a promover prácticas sostenibles entre nuestros clientes."
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestro compromiso con el servicio de calidad y la sostenibilidad ambiental 
            ha generado confianza en empresas y particulares.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-green-50 p-8 rounded-lg shadow-md">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-600 text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 pt-6 italic">
              "{testimonials[currentIndex].text}"
            </p>
            
            <div className="flex items-center">
              <div className="bg-green-600 text-white p-3 rounded-full mr-4">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-green-800">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8 flex space-x-2">
              <button 
                onClick={prevTestimonial} 
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
                aria-label="Testimonio anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"></path>
                </svg>
              </button>
              <button 
                onClick={nextTestimonial} 
                className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
                aria-label="Testimonio siguiente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;