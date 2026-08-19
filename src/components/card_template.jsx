import React from 'react';

function CardTemplate({ children }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-100 via-rose-100 to-red-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-lg w-full text-center transform transition-all">
        {children}
      </div>
    </div>
  );
}

export default CardTemplate;