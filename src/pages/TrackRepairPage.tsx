import React from 'react';
import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function TrackRepairPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <Construction className="w-24 h-24 text-yellow-400 mb-6 animate-bounce" />
      <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">
        {t.comingSoon}
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-md">{t.comingSoonDesc}</p>
      <Link
        to="/"
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        {t.backToHome}
      </Link>
    </div>
  );
}

export default TrackRepairPage;