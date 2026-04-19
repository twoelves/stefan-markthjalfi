"use client";

import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Mail, 
  Brain, 
  Briefcase, 
  Flame,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Globe
} from 'lucide-react';

const PRIMARY_GREEN = "#008B51";

const translations = {
  is: {
    nav: { home: "Heim", about: "Um mig", blog: "Fréttir", lectures: "Fyrirlestrar", book: "Bóka tíma", mark: "Markþjálfun" },
    hero: {
      badge: "Vottaður Markþjálfi",
      title: "Náðu tökum á þínum krafti.",
      desc: "Sérhæfð aðstoð við kulnun, styrkleika ADHD og vöxt í viðskiptum.",
      bookBtn: "Bóka ráðgjöf",
      lecturesBtn: "Fyrirlestrar",
      quote: "Breytingin byrjar hér."
    },
    specialties: {
      title: "Sérfræðiþekking",
      burnout: { title: "Kulnun", desc: "Við greinum orsakaþætti, setjum mörk og endurheimtum orkuna þína með kerfisbundnum hætti." },
      adhd: { title: "ADHD", desc: "Aðferðir til að stýra einbeitingu, bæta skipulag og nýta þína einstöku styrkleika til fulls." },
      business: { title: "Viðskipti", desc: "Fyrir stjórnendur sem vilja skýrari sýn, betri ákvarðanatöku og faglegan vöxt í sínu starfi." }
    },
    contact: {
      title: "Hefjum samtalið.",
      desc: "Bókaðu 15 mínútna kynningarspjall þar sem við fórum yfir hvernig ég get aðstoðað þig.",
      placeholderName: "Nafn",
      placeholderEmail: "Netfang",
      placeholderMsg: "Hvernig get ég aðstoðað þig?",
      sendBtn: "Senda fyrirspurn",
      bookBtn: "Bóka tíma"
    }
  },
  en: {
    nav: { home: "Home", about: "About", blog: "News", lectures: "Lectures", book: "Book Session", mark: "Coaching" },
    hero: {
      badge: "Certified Coach",
      title: "Master your inner power.",
      desc: "Specialized support for burnout, ADHD strengths, and business growth.",
      bookBtn: "Book Consultation",
      lecturesBtn: "Lectures",
      quote: "The change starts here."
    },
    specialties: {
      title: "Expertise",
      burnout: { title: "Burnout", desc: "We analyze causes, set boundaries, and restore your energy in a systematic way." },
      adhd: { title: "ADHD", desc: "Tools to manage focus, improve organization, and fully utilize your unique strengths." },
      business: { title: "Business", desc: "For executives seeking clearer vision, better decision-making, and professional growth." }
    },
    contact: {
      title: "Let's Talk.",
      desc: "Book a 15-minute introductory chat to see how I can support you.",
      placeholderName: "Name",
      placeholderEmail: "Email",
      placeholderMsg: "How can I help you?",
      sendBtn: "Send Inquiry",
      bookBtn: "Book Session"
    }
  }
};

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('is');
  const [mounted, setMounted] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-0 z-[100]">
        <div className="max-w-6xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">SÓ</div>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black text-slate-400">{t.nav.mark}</span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            {['home', 'about', 'blog', 'lectures'].map((id) => (
              <button key={id} className="text-[14px] uppercase tracking-[0.1em] font-bold text-slate-600 hover:text-emerald-600 transition-colors">
                {t.nav[id]}
              </button>
            ))}
            <button onClick={() => setLang(lang === 'is' ? 'en' : 'is')} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 text-[11px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors ml-4">
              <Globe size={14} /> {lang === 'is' ? 'EN' : 'IS'}
            </button>
            <a href="#contact" className="px-8 py-3 rounded-2xl font-bold text-white shadow-lg text-sm transition-all hover:scale-105 active:scale-95 ml-2" style={{ backgroundColor: PRIMARY_GREEN }}>
              {t.nav.book}
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 md:py-32 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-10 border border-emerald-100 bg-emerald-50 text-emerald-700">
            <CheckCircle2 size={16} /> {t.hero.badge}
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold mb-8 leading-[0.95] tracking-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-xl leading-relaxed">{t.hero.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-10 py-5 rounded-[2rem] font-bold text-white shadow-xl flex items-center justify-center gap-3 transition-all hover:scale-105" style={{ backgroundColor: PRIMARY_GREEN }}>
              <Calendar size={22} /> {t.hero.bookBtn}
            </a>
            <button className="bg-slate-50 text-slate-700 px-10 py-5 rounded-[2rem] font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
              {t.hero.lecturesBtn} <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="w-full aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white">
            <img src="/stefan-front.jpg" alt="Stefán Ólafur" className="w-full h-full object-cover" />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] mb-2 text-emerald-600">Stefán Ólafur</p>
              <p className="text-lg text-slate-800 font-serif italic">"{t.hero.quote}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-center">{t.specialties.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Flame size={32} />, ...t.specialties.burnout },
              { icon: <Brain size={32} />, ...t.specialties.adhd },
              { icon: <Briefcase size={32} />, ...t.specialties.business }
            ].map((item, idx) => (
              <div key={idx} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-emerald-600/20 text-emerald-500">{item.icon}</div>
                <h3 className="font-bold text-2xl mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto bg-emerald-600 rounded-[3rem] p-10 md:p-20 text-white text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">{t.contact.title}</h2>
          <p className="text-emerald-100 text-lg mb-12">{t.contact.desc}</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 text-xl">
              <Mail /> stefan@stefanolaful.is
            </div>
            <a href="#contact" className="bg-white text-emerald-600 px-12 py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
              {t.contact.bookBtn}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}