import { useState, useEffect } from 'react';
import { Language } from './data/translations';
import { Navigation, Hero, Services, About, Reviews, FAQ, Appointment, Footer } from './components/Blocks';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent/30 selection:text-primary">
      <Navigation lang={lang} setLang={setLang} />
      <main className="flex-1">
        <Hero lang={lang} />
        <Services lang={lang} />
        <About lang={lang} />
        <Reviews lang={lang} />
        <FAQ lang={lang} />
        <Appointment lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
