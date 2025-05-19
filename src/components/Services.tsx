import React from 'react';
import { Smartphone, Server, Cpu, Battery, MonitorSmartphone, Tv, Thermometer, Laptop } from 'lucide-react';

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ 
  title, 
  description, 
  icon 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
      <div className="text-green-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Dispositivos Móviles",
      description: "Teléfonos celulares, tablets, laptops y baterías de litio.",
      icon: <Smartphone size={48} />
    },
    {
      title: "Equipos de Red",
      description: "Servidores, centrales telefónicas, equipos de red y telecomunicaciones.",
      icon: <Server size={48} />
    },
    {
      title: "Componentes Eléctricos",
      description: "Fuentes de poder, modem, cables de todo tipo.",
      icon: <Battery size={48} />
    },
    {
      title: "Baterías y Catalizadores",
      description: "Baterías de plomo, catalizadores de auto.",
      icon: <Battery size={48} />
    },
    {
      title: "Componentes Informáticos",
      description: "Procesadores, memorias RAM, discos duros, CDroom.",
      icon: <Cpu size={48} />
    },
    {
      title: "Hardware",
      description: "CPU, motherboard, tarjetas electrónicas de video de elevadores de aires acondicionados.",
      icon: <Laptop size={48} />
    },
    {
      title: "Equipos Especializados",
      description: "Equipos médicos, aires acondicionados, hornos microondas.",
      icon: <Thermometer size={48} />
    },
    {
      title: "Pantallas y Monitores",
      description: "Monitores, televisores, pantallas de todo tipo.",
      icon: <MonitorSmartphone size={48} />
    }
  ];

  return (
    <section id="servicios" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">¿Qué Reciclamos?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En TecnoRecycling nos encargamos de reciclar una amplia gama de equipos tecnológicos y electrónicos,
            contribuyendo a la reducción de residuos y a la preservación del medio ambiente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;