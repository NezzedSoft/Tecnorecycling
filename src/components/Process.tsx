import React from 'react';
import { PackageCheck, Recycle, TruckIcon, Award } from 'lucide-react';

const ProcessStep: React.FC<{ icon: React.ReactNode; title: string; description: string; number: number }> = ({
  icon,
  title,
  description,
  number
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center text-white mb-4">
          {icon}
        </div>
        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-2 border-green-600 flex items-center justify-center">
          <span className="font-bold text-green-800">{number}</span>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Process: React.FC = () => {
  const steps = [
    {
      icon: <PackageCheck size={36} />,
      title: "Recolección",
      description: "Recogemos tus equipos electrónicos en desuso directamente desde tu ubicación o puedes traerlos a nuestro centro."
    },
    {
      icon: <Recycle size={36} />,
      title: "Clasificación",
      description: "Separamos los dispositivos por tipo y evaluamos cuáles pueden ser reutilizados o necesitan ser desmantelados."
    },
    {
      icon: <TruckIcon size={36} />,
      title: "Procesamiento",
      description: "Desmantelamos los equipos y separamos los materiales (metales, plásticos, vidrio) para su correcto reciclaje."
    },
    {
      icon: <Award size={36} />,
      title: "Certificación",
      description: "Emitimos un certificado de reciclaje responsable para empresas que necesiten documentar su gestión ambiental."
    }
  ];

  return (
    <section id="proceso" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Nuestro Proceso</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Implementamos un sistema eficiente y responsable para el reciclaje de tus equipos electrónicos,
            garantizando que cada componente sea tratado de la manera más sostenible posible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              number={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;