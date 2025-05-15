import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
// import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      {/* <About /> */}
      <Testimonials />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;