import Hero from './components/Hero'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Features from './components/Features';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-600">
      <Hero />
      <Features />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;