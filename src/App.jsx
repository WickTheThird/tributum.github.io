import { useContent } from './hooks/useContent';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';

function App() {
  const { content, language, toggleLanguage, t, loading } = useContent();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-8 h-8 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-slate-900 selection:text-white">
      <Navbar
        content={content}
        language={language}
        toggleLanguage={toggleLanguage}
        t={t}
      />

      <main>
        <Hero t={t} />
        <Services t={t} />
        <About t={t} />

        <ContactForm t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}

export default App;
