import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, title, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`} 
          />
        ))}
      </div>
      <p className="text-gray-600 mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-semibold text-gray-800">{author}</p>
        <p className="text-gray-500 text-sm">{title}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Un proceso de reciclaje sencillo y efectivo. Estoy muy satisfecho con la atención recibida y la responsabilidad ambiental de esta empresa.",
      author: "Carlos Ruiz",
      location: "Panamá",
      rating: 5
    },
    {
      quote: "¡Excelente servicio! Reciclar mi viejo equipo fue fácil y rápido. Totalmente recomendado.",
      author: "María López",
      location: "Panamá",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre lo que nuestros clientes dicen sobre el reciclaje electrónico.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.location}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;