import React from 'react';
import { Leaf, Shield, CircleDollarSign, GlobeIcon } from 'lucide-react';

const BenefitCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="bg-green-600 p-4 text-white">
        <div className="w-12 h-12 mx-auto flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-green-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Shield size={32} />,
      title: "Seguridad de Datos",
      description: "Garantizamos la destrucción segura de datos en todos los dispositivos de almacenamiento, protegiendo tu información confidencial."
    },
    {
      icon: <CircleDollarSign size={32} />,
      title: "Valor por Materiales",
      description: "Ofrecemos compensación por ciertos equipos que contienen materiales valiosos como oro, plata, cobre y otros metales preciosos."
    },
    {
      icon: <GlobeIcon size={32} />,
      title: "Cumplimiento Normativo",
      description: "Ayudamos a empresas a cumplir con las regulaciones ambientales y de gestión de residuos electrónicos vigentes."
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Beneficios del Reciclaje Tecnológico</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reciclar tus equipos electrónicos no solo es bueno para el planeta, también ofrece ventajas importantes
            para personas y empresas comprometidas con la sostenibilidad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <p className="text-gray-600">de los componentes electrónicos son reciclables</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">70%</div>
              <p className="text-gray-600">reducción de la huella de carbono al reciclar</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1 ton</div>
              <p className="text-gray-600">de dispositivos móviles contiene hasta 300g de oro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
