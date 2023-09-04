import { useMovieData } from 'components/hooks/useMovieData';
import { fetchTrendingMovies } from 'api';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import React from 'react';

const HomePage = () => {
  const { data, loading } = useMovieData(fetchTrendingMovies);
  const movies = data ? data.results : []; // Check if data is not null
  console.log(movies);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesGallery movies={movies} loading={loading} />
    </div>
  );
};

export default HomePage;
