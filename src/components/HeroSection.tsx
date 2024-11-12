import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="text-center mb-16">
      <div className="flex flex-col items-center mb-16 pt-8">
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mb-2"></div>
        <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full opacity-50"></div>
      </div>
      <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">
        {t.heroTitle}
      </h2>
      <p className="text-xl mb-8 text-gray-700">{t.heroSubtitle}</p>
      <a
        href="#contact"
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        {t.contactUs}
      </a>
    </section>
  );
}

export default HeroSection;