import React from 'react';
import { Shield, Leaf, Recycle, Award } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="bg-green-100 text-green-600 p-3 rounded-full inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Protección del medio ambiente",
      description: "Reducir los residuos en vertederos y evitar que materiales tóxicos contaminen el suelo y las fuentes de agua.."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Seguridad de datos",
      description: "La destrucción segura de datos garantiza que su información personal o comercial no caiga en manos equivocadas."
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: "Recuperación de recursos",
      description: "Nuestro proceso garantiza que los desechos electrónicos sean gestionados de forma sostenible, evitando daños al medio ambiente y promoviendo la reutilización de materiales."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Cumplimiento normativo",
      description: "Cumplir con los requisitos legales para la eliminación adecuada de residuos electrónicos y evitar posibles multas."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Beneficios del reciclaje de productos electrónicos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reciclar dispositivos electrónicos no sólo es bueno para el medio ambiente: también ofrece numerosas ventajas tanto para empresas como para particulares.          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;