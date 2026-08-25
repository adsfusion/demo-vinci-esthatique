import React, { ReactNode, useState, useEffect } from 'react';
import { Language, data } from '../data/translations';
import { MapPin, Phone, Clock, Star, CheckCircle, Droplets, Scissors, HandHeart, Brush, Flower2, Sparkles, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Navigation({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) {
  const t = data[lang].nav;
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl md:text-2xl tracking-tighter uppercase">
            Vinci
            <span className="block text-[10px] md:text-xs text-black/50 font-medium tracking-widest mt-[-4px]">
              Esthétique Avancée
            </span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-accent transition-colors">{t.services}</a>
          <a href="#about" className="hover:text-accent transition-colors">{t.about}</a>
          <a href="#faq" className="hover:text-accent transition-colors">{t.faq}</a>
          <a href="#location" className="hover:text-accent transition-colors">{t.contact}</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-black/5 p-1 rounded-full border border-black/5">
            <button 
              onClick={() => setLang('fr')}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-semibold transition-all",
                lang === 'fr' ? "bg-white shadow-sm text-black" : "text-black/60 hover:text-black"
              )}
            >
              FR
            </button>
            <button 
              onClick={() => setLang('ar')}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-semibold transition-all",
                lang === 'ar' ? "bg-white shadow-sm text-black" : "text-black/60 hover:text-black"
              )}
            >
              عربي
            </button>
          </div>
          <a 
            href="#appointment"
            className="hidden sm:inline-flex bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            {t.book}
          </a>
        </div>
      </div>
    </nav>
  );
}

export function Hero({ lang }: { lang: Language }) {
  const t = data[lang].hero;
  return (
    <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden bg-bg-alt">
      <div className="absolute inset-0 z-0">
         {/* Subtle decorative circle */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/40 blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-dark text-xs font-bold tracking-wider uppercase mb-6"
        >
          {t.subtitle}
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary max-w-4xl leading-[1.1]"
        >
          {t.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-black/60 max-w-2xl leading-relaxed"
        >
          {t.description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href="#appointment"
            className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
          >
            {t.ctaPrimary}
          </a>
          <a 
            href="#services"
            className="bg-white hover:bg-black/5 text-primary border border-black/10 px-8 py-4 rounded-full font-medium transition-all text-center"
          >
            {t.ctaSecondary}
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-16 pt-8 border-t border-black/10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-80"
        >
          {t.trust.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle className="w-5 h-5 text-accent-dark" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const iconMap: Record<string, React.ElementType> = {
  Sparkles, Droplets, Scissors, HandHeart, Brush, Flower2
};

export function Services({ lang }: { lang: Language }) {
  const t = data[lang].services;
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t.title}</h2>
          <p className="text-black/60 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-bg-light border border-black/5 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-primary">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-black/60 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function About({ lang }: { lang: Language }) {
  const t = data[lang].about;
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515377659633-68bcdd139a06?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1570172619644-def2f4477839?auto=format&fit=crop&q=80&w=800"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="about" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t.title}</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              {t.content}
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {t.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt="Clinic interior and equipment"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-transparent mix-blend-multiply pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20" dir="ltr">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      currentIndex === i ? "bg-white w-6" : "bg-white/50 w-2 hover:bg-white/80"
                    )}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40 z-20 rtl:rotate-180"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40 z-20 rtl:rotate-180"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Reviews({ lang }: { lang: Language }) {
  const t = data[lang].reviews;
  return (
    <section className="py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">4.8 / 5.0 Google Rating</h2>
          <p className="text-black/60 mt-2">{t.title}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.items.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map(j => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-black/80 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="font-bold text-sm">{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ({ lang }: { lang: Language }) {
  const t = data[lang].faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-center">{t.title}</h2>
        
        <div className="space-y-4">
          {t.items.map((item, i) => (
            <div 
              key={i} 
              className={cn(
                "border border-black/10 rounded-2xl overflow-hidden transition-colors",
                open === i ? "bg-bg-light border-black/20" : "bg-white hover:border-black/20"
              )}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold pr-8">{item.q}</span>
                <ChevronDown className={cn(
                  "w-5 h-5 text-black/50 transition-transform duration-300 flex-shrink-0",
                  open === i ? "rotate-180" : ""
                )} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-black/60 leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Appointment({ lang }: { lang: Language }) {
  const t = data[lang].appointment as any; // Using any for extended types
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Auto-reset after some time (optional, but good for demo)
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="appointment" className="py-24 bg-accent/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-black/5 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.title}</h2>
                  <p className="text-black/60">{t.subtitle}</p>
                </div>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-black/80">{t.name}</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-bg-light border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-black/80">{t.phone}</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-bg-light border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-black/80">{t.service}</label>
                      <select className="w-full bg-bg-light border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all appearance-none">
                        {data[lang].services.items.map((s, i) => (
                          <option key={i} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-black/80">{t.date}</label>
                      <input 
                        type="date" 
                        required
                        className="w-full bg-bg-light border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  
                  <button type="submit" className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl mt-4 transition-colors">
                    {t.submit}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                className="flex flex-col items-center justify-center text-center py-10 h-full"
              >
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6 text-accent-dark">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{t.successTitle}</h3>
                <p className="text-black/60 text-lg max-w-md">{t.successMessage}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export function Footer({ lang }: { lang: Language }) {
  const t = data[lang].location;
  return (
    <footer id="location" className="bg-primary text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="font-bold text-2xl tracking-tighter uppercase mb-2">
              Vinci
              <span className="block text-[10px] text-white/50 font-medium tracking-widest mt-[-4px]">
                Esthétique Avancée
              </span>
            </div>
            <p className="text-white/60 mt-6 leading-relaxed max-w-sm">
              Votre destination premium pour l'épilation laser et les soins esthétiques avancés à Casablanca.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">{t.title}</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-accent" />
                <span>{t.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 shrink-0 text-accent" />
                <span dir="ltr" className="inline-block">{t.hours}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-transparent select-none">Contact</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <a href="tel:+212522986161" dir="ltr" className="hover:text-white transition-colors">{t.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 shrink-0 text-accent flex items-center justify-center font-bold text-xs">WA</div>
                <a href="https://wa.me/212661595630" dir="ltr" className="hover:text-white transition-colors">{t.whatsapp}</a>
              </li>
              <li className="pt-4">
                <a href="https://vinci-esthetique.ma" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors underline underline-offset-4">
                  vinci-esthetique.ma
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          {data[lang].footer.rights}
        </div>
      </div>
    </footer>
  );
}
