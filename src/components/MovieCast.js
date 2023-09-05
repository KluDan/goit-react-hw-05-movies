import { fetchMovieCastById } from 'api';
import { CastList } from './CastList/CastList';

import { useMovieData } from './hooks/useMovieData';

const MovieCast = () => {
  const { data, loading } = useMovieData(fetchMovieCastById);
  const movieCast = data ? data.cast : [];

  if (!Array.isArray(movieCast)) {
    return <div>No cast information available</div>;
  }

  return (
    <div>{movieCast && <CastList cast={movieCast} loading={loading} />}</div>
  );
};

export default MovieCast;
