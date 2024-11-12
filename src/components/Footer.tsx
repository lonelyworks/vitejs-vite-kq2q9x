import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white pt-16 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-400 mb-4">
              Service professionnel de réparation d'ordinateurs et d'appareils électroniques à Montréal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t.services}
                </Link>
              </li>
              <li>
                <Link to="/build-pc" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t.buildPc}
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link to="/track-repair" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t.trackRepair}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-gray-400">2347 rue des ormeaux, Montreal</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-400 mr-2" />
                <a href="tel:5143534333" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  (514) 353-4333
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-400 mr-2" />
                <a href="mailto:info@technick.info" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  info@technick.info
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-gray-400">Lun-Ven: 9h-17h</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-yellow-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Micro PC Plus. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;