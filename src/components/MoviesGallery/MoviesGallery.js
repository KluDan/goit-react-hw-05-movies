import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import {
  MoviesGalleryBlock,
  MoviesGalleryItemBlock,
} from './MoviesGallery.styled';

export const MoviesGallery = ({ movies, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movies || movies.length === 0) {
    return;
  }

  return (
    <MoviesGalleryBlock>
      {movies.map(movie => (
        <MoviesGalleryItemBlock key={movie.id}>
          <>
            <MoviesGalleryItem movie={movie} />
            <p>{movie.title ?? movie.name}</p>
          </>
        </MoviesGalleryItemBlock>
      ))}
    </MoviesGalleryBlock>
  );
};
