import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nMensaje: ${formData.message}`
    );
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/50761905805?text=${message}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Contáctanos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes equipos electrónicos para reciclar o alguna consulta? Estaremos encantados de atenderte.
            Completa el formulario o utiliza nuestros datos de contacto directo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <form onSubmit={handleSubmit} className="bg-green-50 p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tu número de teléfono"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="¿Qué equipos deseas reciclar o cuál es tu consulta?"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Enviar Mensaje
              </button>
            </form>
            
            <div className="mt-8 space-y-4">
              <a 
                href="https://wa.me/50761905805" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center group hover:bg-green-50 p-2 rounded-lg transition-colors"
              >
                <Phone className="text-green-600 mr-3 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-gray-700 group-hover:text-green-600 transition-colors">+507 6190 5805</span>
              </a>
              
              <a 
                href="mailto:Tecnorecyclingpty@gmail.com" 
                className="flex items-center group hover:bg-green-50 p-2 rounded-lg transition-colors"
              >
                <Mail className="text-green-600 mr-3 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-gray-700 group-hover:text-green-600 transition-colors break-all">
                  Tecnorecyclingpty@gmail.com
                </span>
              </a>
              
              <div className="flex items-start group hover:bg-green-50 p-2 rounded-lg transition-colors">
                <MapPin className="text-green-600 mr-3 group-hover:scale-110 transition-transform flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">
                  Centro de acopio Almacenajes y depósito vista hermosa
                </span>
              </div>
            </div>
          </div>
          
          <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.8553644020247!2d-79.54350000000001!3d8.983499999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f1dbe80363%3A0xa266dc4ec7d5cb92!2sPanama%20City%2C%20Panama!5e0!3m2!1sen!2sus!4v1652918078404!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de TecnoRecycling"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;