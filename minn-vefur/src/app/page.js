"use client";

import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Mail, 
  Video, 
  Brain, 
  Briefcase, 
  Flame,
  ArrowRight,
  Clock,
  CheckCircle2,
  Menu,
  X,
  PlayCircle,
  ChevronRight,
  Globe
} from 'lucide-react';

const PRIMARY_GREEN = "#008B51";

// Þýðingartextar úr "virkar.txt"
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
    about: {
      title: "Um Stefán Ólaf.",
      text1: "Ég er vottaður markþjálfi með brennandi áhuga á mannauði og árangri. Ég hjálpa fólki að brjótast út úr vítahring kulnunar og nýta ADHD sem drifkraft.",
      text2: "Mín nálgun er hagnýt, lausnamiðuð og byggð á áratuga reynslu úr íslensku atvinnulífi.",
      feat1: "Vottaður Markþjálfi",
      feat2: "Sérhæfing í ADHD & Kulnun",
      feat3: "Yfir 500 klst í samtölum"
    },
    blog: {
        title: "Fréttir & Greinar",
        subtitle: "Fróðleikur um markþjálfun og persónulegan vöxt.",
        readMore: "Lesa meira"
    },
    lectures: {
        title: "Fyrirlestrar",
        subtitle: "Sjálfstætt nám á þínum hraða (Self-paced).",
        new: "Nýtt",
        comingSoon: "Væntanlegt í sumar",
        duration: "mín",
        viewBtn: "Sjá námskeið"
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
    about: {
      title: "About Stefán Ólafur.",
      text1: "I am a certified coach with a passion for human resources and achievement. I help people break the cycle of burnout and harness ADHD as a driving force.",
      text2: "My approach is practical, solution-oriented, and built on decades of experience in the business world.",
      feat1: "Certified Coach",
      feat2: "ADHD & Burnout Specialist",
      feat3: "500+ Coaching Hours"
    },
    blog: {
        title: "News & Articles",
        subtitle: "Insights on coaching and personal growth.",
        readMore: "Read more"
    },
    lectures: {
        title: "Lectures",
        subtitle: "Self-paced learning at your convenience.",
        new: "New",
        comingSoon: "Coming this summer",
        duration: "min",
        viewBtn: "View Course"
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

const MOCK_BLOGS = [
    {
      id: 1,
      title_is: "Hvernig á að þekkja fyrstu merki kulnunar?",
      title_en: "How to recognize early signs of burnout?",
      excerpt_is: "Kulnun gerist sjaldnast yfir nóttu. Hér eru fimm lykilatriði sem gott er að hafa í huga...",
      excerpt_en: "Burnout rarely happens overnight. Here are five key points to keep in mind...",
      date: "14.04.2024",
      category_is: "Vellíðan",
      category_en: "Wellness"
    },
    {
      id: 2,
      title_is: "ADHD á vinnustað: Frá áskorun í styrkleika",
      title_en: "ADHD at work: From challenge to strength",
      excerpt_is: "Með réttum tólum og skipulagi getur ADHD verið þinn helsti drifkraftur.",
      excerpt_en: "With the right tools and organization, ADHD can be your main driving force.",
      date: "02.05.2024",
      category_is: "ADHD",
      category_en: "ADHD"
    }
];

export default function Page() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState('is');

  const t = translations[lang] || translations.is;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }
  }, [isMenuOpen]);

  const navigateTo = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-[#FDFDFD]"></div>;
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-0 z-[100]">
        <div className="max-w-6xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigateTo('home')}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg transition-transform group-hover:scale-105">SÓ</div>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black text-slate-400 group-hover:text-emerald-600 transition-colors">{t.nav.mark}</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {['home', 'about', 'blog', 'lectures'].map((id) => (
              <button 
                key={id}
                onClick={() => navigateTo(id)} 
                className={`text-[14px] uppercase tracking-[0.1em] font-bold transition-all hover:opacity-100 ${
                  activeTab === id ? 'opacity-100' : 'opacity-40'
                }`}
                style={{ 
                  color: activeTab === id ? PRIMARY_GREEN : 'inherit',
                  borderBottom: activeTab === id ? `2px solid ${PRIMARY_GREEN}` : '2px solid transparent'
                }}
              >
                {t.nav[id]}
              </button>
            ))}
            
            <button 
              onClick={() => setLang(lang === 'is' ? 'en' : 'is')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 text-[11px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors ml-4"
            >
              <Globe size={14} /> {lang === 'is' ? 'EN' : 'IS'}
            </button>

            <a 
              href="#contact" 
              className="px-8 py-3 rounded-2xl font-bold text-white shadow-lg text-sm transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95 ml-2"
              style={{ backgroundColor: PRIMARY_GREEN }}
            >
              {t.nav.book}
            </a>
          </div>

          <button 
            className="md:hidden p-3 -mr-2 text-slate-800" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-20 bg-white z-[90] flex flex-col p-8 space-y-6 md:hidden overflow-y-auto shadow-2xl">
            {['home', 'about', 'blog', 'lectures'].map((id) => (
                <button 
                    key={id} 
                    onClick={() => navigateTo(id)} 
                    className="text-left font-black uppercase tracking-widest text-2xl py-4 border-b border-slate-50"
                    style={{ color: activeTab === id ? PRIMARY_GREEN : 'inherit' }}
                >
                    {t.nav[id]}
                </button>
            ))}
            <button 
              onClick={() => { setLang(lang === 'is' ? 'en' : 'is'); setIsMenuOpen(false); }}
              className="flex items-center gap-3 font-bold uppercase tracking-widest text-emerald-600 text-xl py-6"
            >
              <Globe size={24} /> {lang === 'is' ? 'English Version' : 'Íslensk útgáfa'}
            </button>
            <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)} 
                className="block w-full text-center py-6 rounded-2xl font-bold text-white text-2xl shadow-xl mt-4" 
                style={{ backgroundColor: PRIMARY_GREEN }}
            >
                {t.nav.book}
            </a>
          </div>
        )}
      </nav>

      {activeTab === 'home' && (
        <main className="animate-in fade-in duration-1000">
          {/* Hero Section */}
          <div className="bg-[#F8FAFC] border-b border-slate-200/60 shadow-inner">
            <section className="relative py-12 md:py-32 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
              <div className="md:w-3/5 text-center md:text-left">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-10 border border-emerald-100 bg-white shadow-sm" style={{ color: PRIMARY_GREEN }}>
                  <CheckCircle2 size={16} /> {t.hero.badge}
                </div>
                <h1 className="text-4xl md:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight text-slate-900">
                  {lang === 'is' ? (
                    <>Náðu <span className="italic font-serif font-medium" style={{ color: PRIMARY_GREEN }}>tökum</span> á þínum krafti.</>
                  ) : (
                    <>Master your <span className="italic font-serif font-medium" style={{ color: PRIMARY_GREEN }}>inner</span> power.</>
                  )}
                </h1>
                <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-xl leading-relaxed mx-auto md:mx-0 font-medium">
                  {t.hero.desc}
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                  <a 
                    href="#contact" 
                    className="px-10 py-5 rounded-[2rem] font-bold text-white shadow-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02]"
                    style={{ backgroundColor: PRIMARY_GREEN }}
                  >
                    <Calendar size={22} /> {t.hero.bookBtn}
                  </a>
                  <button 
                    onClick={() => navigateTo('lectures')}
                    className="bg-white border-2 border-slate-100 text-slate-700 px-10 py-5 rounded-[2rem] font-bold hover:border-slate-300 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    {t.hero.lecturesBtn} <ArrowRight size={20} />
                  </button>
                </div>
              </div>
              
              <div className="md:w-2/5 relative w-full">
                <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full -rotate-12 translate-x-4 opacity-70"></div>
                <div className="w-full aspect-[4/5] bg-white rounded-[3rem] md:rounded-[4rem] border-[8px] md:border-[12px] border-white shadow-2xl relative overflow-hidden group z-10">
                   <img 
                      src="/stefan-front.jpg" 
                      alt="Stefán Ólafur" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 bg-white/90 backdrop-blur-md p-6 md:p-7 rounded-[2rem] border border-white/50 shadow-xl text-center md:text-left">
                      <p className="text-[11px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: PRIMARY_GREEN }}>Stefán Ólafur</p>
                      <p className="text-lg md:text-xl text-slate-800 font-serif italic leading-tight">"{t.hero.quote}"</p>
                   </div>
                </div>
              </div>
            </section>
          </div>

          {/* Specialties Grid */}
          <section className="bg-slate-900 py-24 md:py-32 text-white">
            <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase">{t.specialties.title}</h2>
                <div className="h-1 w-20 mx-auto rounded-full" style={{ backgroundColor: PRIMARY_GREEN }}></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {[
                  { icon: <Flame size={32} />, ...t.specialties.burnout },
                  { icon: <Brain size={32} />, ...t.specialties.adhd },
                  { icon: <Briefcase size={32} />, ...t.specialties.business }
                ].map((item, idx) => (
                  <div key={idx} className="group p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-inner transition-transform group-hover:scale-110" style={{ backgroundColor: PRIMARY_GREEN + "20", color: PRIMARY_GREEN }}>
                      {item.icon}
                    </div>
                    <h3 className="font-extrabold text-2xl mb-5 uppercase tracking-tight">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-lg font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {activeTab === 'about' && (
        <section className="py-20 md:py-24 max-w-5xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
           <h2 className="text-4xl md:text-7xl font-extrabold mb-12 md:mb-16 tracking-tighter text-slate-900 italic font-serif text-center md:text-left">{t.about.title}</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="space-y-8 text-xl text-slate-500 leading-relaxed font-medium order-2 md:order-1 text-center md:text-left">
                <p>{t.about.text1}</p>
                <p>{t.about.text2}</p>
                <div className="pt-8 space-y-5 font-bold text-sm uppercase tracking-[0.15em] text-slate-400">
                  <div className="flex items-center gap-4 text-slate-700 justify-center md:justify-start"><CheckCircle2 size={24} style={{ color: PRIMARY_GREEN }}/> {t.about.feat1}</div>
                  <div className="flex items-center gap-4 text-slate-700 justify-center md:justify-start"><CheckCircle2 size={24} style={{ color: PRIMARY_GREEN }}/> {t.about.feat2}</div>
                  <div className="flex items-center gap-4 text-slate-700 justify-center md:justify-start"><CheckCircle2 size={24} style={{ color: PRIMARY_GREEN }}/> {t.about.feat3}</div>
                </div>
              </div>
              <div className="rounded-[3rem] md:rounded-[4rem] aspect-[4/5] overflow-hidden border-[8px] md:border-[12px] border-white shadow-2xl order-1 md:order-2 max-w-sm md:max-w-md mx-auto md:mx-0 bg-slate-50">
                 <img src="/stefan-front.jpg" alt="Stefán Ólafur" className="w-full h-full object-cover" />
              </div>
           </div>
        </section>
      )}

      {activeTab === 'blog' && (
        <section className="py-20 md:py-24 max-w-6xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight font-serif italic text-slate-900 uppercase">{t.blog.title}</h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium italic">{t.blog.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {MOCK_BLOGS.map((blog) => (
              <div key={blog.id} className="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{lang === 'is' ? blog.category_is : blog.category_en}</span>
                  <span className="text-xs text-slate-400 font-bold">{blog.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 uppercase tracking-tight text-slate-900 leading-tight">
                    {lang === 'is' ? blog.title_is : blog.title_en}
                </h3>
                <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                    {lang === 'is' ? blog.excerpt_is : blog.excerpt_en}
                </p>
                <button className="mt-auto flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:gap-4 transition-all" style={{ color: PRIMARY_GREEN }}>
                  {t.blog.readMore} <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'lectures' && (
        <section className="py-20 md:py-24 max-w-6xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-8 duration-700 text-center">
          <h2 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight font-serif italic text-slate-900 uppercase">{t.lectures.title}</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-16 md:mb-20 font-medium italic">{t.lectures.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-left max-w-4xl mx-auto">
            <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 border-2 border-slate-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition">
                <PlayCircle size={150} />
              </div>
              <div className="px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest inline-block mb-8 text-white shadow-lg w-fit" style={{ backgroundColor: PRIMARY_GREEN }}>{t.lectures.new}</div>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4 uppercase tracking-tighter text-slate-900">{lang === 'is' ? 'Kulnun og vinnustaðurinn' : 'Burnout and the Workplace'}</h3>
              <p className="text-slate-500 mb-12 text-lg leading-relaxed font-medium">
                {lang === 'is' 
                    ? 'Hvernig á að þekkja einkennin og grípa inn í áður en það er um seinan. Verkfæri fyrir alla.' 
                    : 'How to recognize signs and intervene before it\'s too late. Tools for everyone.'}
              </p>
              <div className="flex items-center justify-between border-t border-slate-50 pt-10 mt-auto">
                <span className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-[0.2em]"><Clock size={18}/> 45 {t.lectures.duration}</span>
                <button className="px-10 py-4 rounded-2xl text-white font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-xl" style={{ backgroundColor: PRIMARY_GREEN }}>{t.lectures.viewBtn}</button>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 border-2 border-dashed border-slate-200 flex flex-col justify-center items-center text-center opacity-60">
              <Clock className="text-slate-300 mb-6" size={48} />
              <h3 className="text-2xl font-bold text-slate-400 uppercase tracking-tight">ADHD strengths</h3>
              <p className="text-slate-400 mt-2 font-bold uppercase tracking-widest text-[10px]">{t.lectures.comingSoon}</p>
            </div>
          </div>
        </section>
      )}

      {/* Hafðu samband Section */}
      <section id="contact" className="py-20 md:py-24 px-6 bg-white border-t border-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[3rem] md:rounded-[4rem] p-8 md:p-20 flex flex-col lg:flex-row items-center gap-12 md:gap-20 shadow-3xl text-white relative overflow-hidden" style={{ backgroundColor: PRIMARY_GREEN }}>
            <div className="lg:w-1/2 text-center lg:text-left relative z-10">
              <h2 className="text-4xl md:text-8xl font-extrabold mb-8 leading-tight tracking-tighter uppercase">{t.contact.title}</h2>
              <p className="text-white/80 text-xl mb-14 leading-relaxed font-medium italic">{t.contact.desc}</p>
              
              <div className="space-y-6 md:space-y-8 text-xs font-bold uppercase tracking-[0.25em]">
                <div className="flex items-center gap-6 group cursor-pointer justify-center lg:justify-start">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-emerald-800 transition-all shadow-xl">
                    <Mail size={24} />
                  </div>
                  <span className="text-lg tracking-tight lowercase">stefan@stefanolaful.is</span>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer justify-center lg:justify-start">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-emerald-800 transition-all shadow-xl">
                    <Calendar size={24} />
                  </div>
                  <span className="text-lg underline underline-offset-8 decoration-white/30">{t.contact.bookBtn}</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full bg-black/10 backdrop-blur-xl p-8 md:p-14 rounded-[2.5rem] border border-white/20 relative z-10 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <input type="text" placeholder={t.contact.placeholderName} className="w-full bg-white/10 border border-white/10 p-5 md:p-6 rounded-2xl placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/50 transition text-base" />
                  <input type="email" placeholder={t.contact.placeholderEmail} className="w-full bg-white/10 border border-white/10 p-5 md:p-6 rounded-2xl placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/50 transition text-base" />
                </div>
                <textarea placeholder={t.contact.placeholderMsg} rows="5" className="w-full bg-white/10 border border-white/10 p-6 rounded-2xl placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/50 transition text-base"></textarea>
                <button className="w-full bg-white py-5 md:py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-[1.01] active:scale-95" style={{ color: PRIMARY_GREEN }}>
                  {t.contact.sendBtn}
                </button>
              </form>
            </div>
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-[100px]"></div>
          </div>
        </div>
      </section>

      <footer className="py-20 md:py-24 text-slate-300 text-[11px] text-center bg-white border-t border-slate-100 uppercase tracking-widest">
        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-300 font-black text-xl mx-auto mb-10 grayscale opacity-50">SÓ</div>
        <div className="font-black tracking-[0.4em] uppercase mb-4 text-slate-400">{t.nav.mark}</div>
        <p className="font-bold text-slate-400">Reykjavík, Iceland &bull; &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}