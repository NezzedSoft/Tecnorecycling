import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  setTimeout(() => {
    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Construir mensaje de WhatsApp
    const { name, email, phone, message } = formData;
    const text = `Hola! Soy ${name}. Quiero reciclar un dispositivo electrónico.\n\n Teléfono: ${phone}\n Email: ${email}\n Mensaje: ${message}`;
    const encodedText = encodeURIComponent(text);

    // Número de destino (incluye código de país, sin símbolos)
    const whatsappNumber = "50761905805"; // Reemplazá con tu número

    // Abrir WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  }, 1500);
};

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Contáctanos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre nuestros servicios de reciclaje?
            Contacta con nuestro equipo y estaremos encantados de ayudarte.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 lg:order-2">
            <div className="bg-white rounded-lg p-8">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full inline-block mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Gracias!</h3>
                  <p className="text-gray-600">
                    Su mensaje se ha enviado correctamente. Nos pondremos en contacto con usted lo antes posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre de la Empresa</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Número de teléfono</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando...
                      </span>
                    ) : (
                      <span className="inline-flex items-center">
                        Enviar
                        <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:order-1">
            <div className="bg-green-700 text-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-600 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Visitanos</h4>
                    <p className="opacity-90">Centro de Acopio: Vista Hermosa al lado de Central de uniformes, <br /> Almacenajes Minidepósitos. </p>
                    <p className="opacity-90">Lunes - Viernes: 8:00am - 4:30pm</p>
                    <p className="opacity-90">Sábado: 8:00am - 12:00pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-600 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Teléfono</h4>
                    <p className="opacity-90">507 6190-5805</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-600 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="opacity-90">tecnorecyclingpty@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-green-600">
                <h4 className="font-semibold text-lg mb-4">Seguinos en nuestras redes sociales!</h4>
                <div className="flex space-x-4">
                  {/* Facebook */}
                  <a href="https://www.facebook.com/tecnorecyclingpty" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-500 p-3 rounded-full transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  {/* <a href="https://www.twitter.com/tecnorecyclingpty" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-500 p-3 rounded-full transition-colors">
                    <span className="sr-only">X</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                    </svg>
                  </a> */}

                  {/* Instagram */}
                  <a href="https://www.instagram.com/tecnorecyclingpty" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-500 p-3 rounded-full transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  {/* <a href="https://www.linkedin.com/tecnorecyclingpty" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-500 p-3 rounded-full transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                  </a> */}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;