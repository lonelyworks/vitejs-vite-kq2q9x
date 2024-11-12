import React from 'react';
import { BuildFeatureProps } from '../types';

function BuildFeature({ Icon, title, description }: BuildFeatureProps) {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Icon className="w-12 h-12 text-orange-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default BuildFeature;