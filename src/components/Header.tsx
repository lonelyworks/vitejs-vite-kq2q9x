import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="bg-gradient-to-b from-white to-gray-50 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="transition-transform hover:scale-105">
          <Logo />
        </Link>
        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-yellow-600 transition-colors">
                {t.services}
              </Link>
            </li>
            <li>
              <Link to="/build-pc" className="text-gray-700 hover:text-yellow-600 transition-colors">
                {t.buildPc}
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-700 hover:text-yellow-600 transition-colors">
                {t.about}
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-700 hover:text-yellow-600 transition-colors">
                {t.contact}
              </Link>
            </li>
            <li>
              <Link
                to="/track-repair"
                className="text-yellow-600 hover:text-yellow-700 transition-colors font-medium"
              >
                {t.trackRepair}
              </Link>
            </li>
          </ul>
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="flex items-center text-yellow-600 hover:text-yellow-700 transition-colors"
          >
            <Globe className="w-5 h-5 mr-1" />
            {language === 'en' ? 'FR' : 'EN'}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;