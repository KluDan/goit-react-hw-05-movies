import { fetchMovieReviewsById } from 'api';
import { useMovieData } from './hooks/useMovieData';
import { ReviewsList } from './ReviewsList/ReviewsList';
import { styled } from 'styled-components';

const MovieReviews = () => {
  const { data, loading } = useMovieData(fetchMovieReviewsById);
  const movieReviews = data ? data.results : [];
  console.log(movieReviews);

  return (
    <ReviewsBlock>
      {movieReviews && <ReviewsList reviews={movieReviews} loading={loading} />}
    </ReviewsBlock>
  );
};

export default MovieReviews;

const ReviewsBlock = styled.div`
  padding: 30px 40px 0;
`;
