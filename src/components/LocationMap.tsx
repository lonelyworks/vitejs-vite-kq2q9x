import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function LocationMap() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow-lg">
      <div className="flex-grow">
        <iframe
          title="Location Map"
          width="100%"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=2347+rue+des+ormeaux,Montreal"
          allowFullScreen
        />
      </div>
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 text-center">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=2347+rue+des+ormeaux,Montreal"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 inline-block shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          {t.getDirections}
        </a>
      </div>
    </div>
  );
}

export default LocationMap;