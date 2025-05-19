import React, { useEffect, useState } from 'react';
import { Recycle, Truck, Globe } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatCounter: React.FC<StatProps> = ({ 
  icon, 
  value, 
  label, 
  suffix = "", 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const incrementAmount = value / (duration / 16);
    const timer = setInterval(() => {
      start += incrementAmount;
      if (start > value) start = value;
      setCount(Math.floor(start));
      if (start === value) clearInterval(timer);
    }, 16);
    
    return () => clearInterval(timer);
  }, [value, duration]);
  
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-4 rounded-full mb-4 shadow-md">
        <div className="text-green-600">
          {icon}
        </div>
      </div>
      <div className="text-4xl font-bold text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-green-100">{label}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  
  return (
    <section id="stats-section" className="py-16 bg-green-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestro Impacto</h2>
          <p className="text-green-100 max-w-2xl mx-auto">
            En TecnoRecycling nos enorgullecemos de contribuir positivamente al medio ambiente 
            a través de nuestro compromiso con el reciclaje responsable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {isVisible && (
            <>
              <StatCounter 
                icon={<Recycle size={48} />} 
                value={50} 
                suffix="+" 
                label="Toneladas de E-waste recicladas" 
              />
              <StatCounter 
                icon={<Truck size={48} />} 
                value={200} 
                suffix="+" 
                label="Recolecciones realizadas" 
              />
              <StatCounter 
                icon={<Globe size={48} />} 
                value={30} 
                suffix="%" 
                label="Reducción de huella de carbono" 
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Stats;