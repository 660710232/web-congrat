import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardTemplate from '../components/card_template';
import BackButton from '../components/back_button';
import moviesData from '../data/movies.json'

function Movie() {
  const navigate = useNavigate();

  return (
    <>
        <BackButton />
        <CardTemplate>
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-rose-100">
        <div className="text-left">
          <h2 className="text-2xl font-bold text-rose-600">หนังที่เราดูด้วยกัน</h2>
          <p className="text-xs text-gray-500 mt-0.5">รวมทั้งหมด {moviesData.length} เรื่อง</p>
        </div>
      </div>

      {/* Movie List */}
      <div className="space-y-3 max-h-[55vh] overflow-y-auto pr-1 text-left">
        {moviesData.map((movie) => (
          <div
            key={movie.id}
            className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-50/40 border border-rose-100/80 hover:bg-rose-50/80 transition-colors"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-20 h-28 object-cover rounded-xl shadow-md shrink-0 border border-white"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-bold text-gray-800 text-base truncate">{movie.title}</h3>
                <span className="text-xs text-rose-500 font-medium whitespace-nowrap">{movie.location}</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">{movie.date}</p>
              <p className="text-xs text-gray-600 mt-1.5 bg-white/80 p-2 rounded-lg leading-relaxed">
                {movie.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </CardTemplate>
    </>
  );
}

export default Movie;