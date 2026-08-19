import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Film } from 'lucide-react'

function MovieButton() {
    const navigate = useNavigate();
  return (
    <button
        onClick={() => navigate('/movie')}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-md text-rose-600 font-semibold px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:bg-rose-50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 "
      >
        <Film />
      </button>
  );
}

export default MovieButton;