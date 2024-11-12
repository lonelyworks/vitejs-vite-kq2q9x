import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

function ContactInfo() {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg flex flex-col justify-center">
      <div className="space-y-6">
        <div className="flex items-center justify-center">
          <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0" />
          <p className="text-gray-700 ml-4">2347 rue des ormeaux, Montreal</p>
        </div>
        <div className="flex items-center justify-center">
          <Mail className="w-6 h-6 text-orange-500 flex-shrink-0" />
          <a href="mailto:info@technick.info" className="text-orange-600 hover:text-orange-700 transition-colors ml-4">
            info@technick.info
          </a>
        </div>
        <div className="flex items-center justify-center">
          <Phone className="w-6 h-6 text-orange-500 flex-shrink-0" />
          <a href="tel:5143534333" className="text-orange-600 hover:text-orange-700 transition-colors ml-4">
            (514) 353-4333
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;