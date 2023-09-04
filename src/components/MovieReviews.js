import { fetchMovieReviewsById } from 'api';
import { useMovieData } from './hooks/useMovieData';
import { ReviewsList } from './ReviewsList/ReviewsList';

const MovieReviews = () => {
  const { data, loading } = useMovieData(fetchMovieReviewsById);
  const movieReviews = data ? data.results : [];

  return (
    <div>
      {movieReviews && <ReviewsList reviews={movieReviews} loading={loading} />}
    </div>
  );
};

export default MovieReviews;
