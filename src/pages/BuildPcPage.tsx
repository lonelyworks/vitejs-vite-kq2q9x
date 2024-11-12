import React, { useState } from 'react';
import { Cpu, Monitor, Wrench, DollarSign, Shield, Clock, Award, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BuildFeature from '../components/BuildFeature';
import BuildReason from '../components/BuildReason';

function BuildPcPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  const features = [
    { Icon: Shield, title: 'Garantie Étendue', description: 'Tous nos composants sont couverts par une garantie minimale d\'un an, pouvant aller jusqu\'à 5 ans selon les pièces sélectionnées.' },
    { Icon: Clock, title: 'Assemblage Rapide', description: 'Votre PC personnalisé sera assemblé et prêt en seulement 2 à 3 jours ouvrables après réception de tous les composants.' },
    { Icon: Award, title: 'Composants Fiables', description: 'Nous sélectionnons méticuleusement des composants de marques réputées, testés et approuvés pour leur fiabilité et leurs performances.' },
    { Icon: Heart, title: 'Expertise Technique', description: 'Notre équipe de techniciens expérimentés possède de nombreuses années d\'expérience dans l\'assemblage de PC sur mesure et la sélection de composants.' }
  ];

  const reasons = [
    { Icon: Cpu, title: t.reason1Title, description: t.reason1Desc },
    { Icon: Monitor, title: t.reason2Title, description: t.reason2Desc },
    { Icon: Wrench, title: t.reason3Title, description: t.reason3Desc },
    { Icon: DollarSign, title: t.reason4Title, description: t.reason4Desc }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <section className="relative text-center py-24 mb-16 rounded-3xl overflow-hidden bg-[url('/images/gaming-desk-bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-20">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            {t.buildPcHero}
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
            {t.buildPcSubtitle}
          </p>
          
          <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-700 mb-6">{t.buildPcComingSoon}</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.enterEmail}
                className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-yellow-400 flex-grow max-w-md"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-2 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                {t.notifyMe}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <BuildFeature key={index} {...feature} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">
          {t.whyBuildPc}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg">
            {reasons.slice(0, 2).map((reason, index) => (
              <BuildReason key={index} {...reason} />
            ))}
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg">
            {reasons.slice(2).map((reason, index) => (
              <BuildReason key={index} {...reason} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BuildPcPage;