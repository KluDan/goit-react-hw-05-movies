import { LoadingSpinner } from 'components/LoadingSpinner';

import { useLocation } from 'react-router-dom';
import {
  MoviesGalleryBlock,
  MoviesGalleryItemBlock,
} from './MoviesGallery.styled';
import MovieItem from './MoviesItem';

export const MoviesGallery = ({ movies, loading }) => {
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!movies || movies.length === 0) {
    return;
  }

  return (
    <MoviesGalleryBlock>
      {movies.map(movie => (
        <MoviesGalleryItemBlock key={movie.id}>
          <MovieItem movie={movie} location={location} />
        </MoviesGalleryItemBlock>
      ))}
    </MoviesGalleryBlock>
  );
};
