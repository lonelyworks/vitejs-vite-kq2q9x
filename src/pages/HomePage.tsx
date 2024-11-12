import React from 'react';
import { Laptop, Smartphone, Gamepad } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import ContactInfo from '../components/ContactInfo';
import LocationMap from '../components/LocationMap';

function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <HeroSection />

      <section id="services" className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">
          {t.ourServices}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            Icon={Laptop}
            title={t.computerRepair}
            description={t.computerRepairDesc}
          />
          <ServiceCard
            Icon={Smartphone}
            title={t.mobileRepair}
            description={t.mobileRepairDesc}
          />
          <ServiceCard
            Icon={Gamepad}
            title={t.consoleRepair}
            description={t.consoleRepairDesc}
          />
        </div>
      </section>

      <section id="about" className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">
          {t.aboutTitle}
        </h2>
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">{t.aboutP1}</p>
          <p className="text-lg text-gray-700 leading-relaxed">{t.aboutP2}</p>
        </div>
      </section>

      <section id="contact" className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">
          {t.contactTitle}
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <ContactInfo />
          <LocationMap />
        </div>
      </section>
    </>
  );
}

export default HomePage;