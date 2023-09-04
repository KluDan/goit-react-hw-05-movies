import { fetchMovieCastById } from 'api';
import { CastList } from './CastList/CastList';

import { useMovieData } from './hooks/useMovieData';

const MovieCast = () => {
  const { data, loading } = useMovieData(fetchMovieCastById);
  const movieCast = data ? data.cast : [];

  // Check if movieCast is an array before rendering CastList
  if (!Array.isArray(movieCast)) {
    // Handle the case when movieCast is not an array (e.g., it's null or undefined)
    return <div>No cast information available</div>;
  }

  return (
    <div>{movieCast && <CastList cast={movieCast} loading={loading} />}</div>
  );
};

export default MovieCast;
