import { Link } from 'react-router-dom';
import {
  MovieBlock,
  MoviesTitle,
  MoviesGalleryItem,
} from './MoviesGallery.styled';

const MovieItem = ({ movie, location }) => {
  const placeholderImage =
    'https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg';

  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    : placeholderImage;

  return (
    <MovieBlock>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        <MoviesGalleryItem src={posterPath} alt={movie.original_title} />
        <MoviesTitle>{movie.title ?? movie.name}</MoviesTitle>
      </Link>
    </MovieBlock>
  );
};

export default MovieItem;
