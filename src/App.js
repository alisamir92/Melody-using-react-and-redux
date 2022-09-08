import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import { Switch } from 'react-router';
import "./pages/home"
import Home from './pages/home';
import Movies from './pages/movies';
import MoviePage from './pages/movie-page';
import SeriesPage from './pages/series-page';
import WatchList from './pages/watch-list';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie-page" element={<MoviePage />} />
        <Route path="/series-page" element={<SeriesPage />} />
        <Route path="/watch-list" element={<WatchList />} />
      </Routes>
    </>
  );
};

export default App;
