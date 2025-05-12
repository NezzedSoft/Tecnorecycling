import React from 'react';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Collection & Transportation",
      description: "We offer convenient pickup services for businesses and drop-off locations for individuals. Our specialized equipment ensures safe handling of all electronic waste.",
      image: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Secure Data Destruction",
      description: "All storage devices undergo certified data wiping or physical destruction processes that meet the highest security standards, protecting your sensitive information.",
      image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Sorting & Dismantling",
      description: "Our technicians carefully disassemble devices to separate reusable components, hazardous materials, and valuable resources for appropriate processing.",
      image: "https://images.pexels.com/photos/5712158/pexels-photo-5712158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Material Recovery",
      description: "Using advanced processes, we extract precious metals, plastics, and other materials from e-waste for reintroduction into the manufacturing supply chain.",
      image: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Recycling Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a comprehensive, environmentally responsible approach to recycling electronic devices, ensuring maximum resource recovery and minimal environmental impact.
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
                  href="#contact" 
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
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