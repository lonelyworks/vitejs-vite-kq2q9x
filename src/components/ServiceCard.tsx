import React from 'react';
import { ServiceCardProps } from '../types';

function ServiceCard({ Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <Icon className="w-12 h-12 text-orange-500 mb-4" />
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

export default ServiceCard;