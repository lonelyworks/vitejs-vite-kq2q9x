import React from 'react';
import { BuildReasonProps } from '../types';

function BuildReason({ Icon, title, description }: BuildReasonProps) {
  return (
    <div className="flex items-start mb-6">
      <Icon className="w-12 h-12 text-orange-500 flex-shrink-0 mr-4" />
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default BuildReason;