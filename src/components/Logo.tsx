import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black px-6 py-2 rounded-lg shadow-md">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-wide">MICRO PC</span>
          <span className="text-xl font-semibold tracking-wider">PLUS</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;