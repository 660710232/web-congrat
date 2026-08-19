import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import Movie from './pages/movie';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
  );
}
export default App;