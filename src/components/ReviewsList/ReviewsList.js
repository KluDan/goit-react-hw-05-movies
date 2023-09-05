import { LoadingSpinner } from 'components/LoadingSpinner';

import {
  Reviews,
  ReviewsItemTitle,
  ReviewsItemTop,
} from './ReviewsList.styled';

export const ReviewsList = ({ reviews, loading }) => {
  if (loading) {
    return <LoadingSpinner />;
  }
  if (!Array.isArray(reviews) || reviews.length === 0) {
    return <div>Reviews data is not available.</div>;
  }
  function formatDate(inputDateString) {
    const inputDate = new Date(inputDateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = inputDate.toLocaleDateString('en-US', options);
    return formattedDate;
  }
  return (
    <Reviews>
      {reviews.map(review => (
        <li key={review.id}>
          <ReviewsItemTop>
            <ReviewsItemTitle>{review.author}</ReviewsItemTitle>
            <p>{formatDate(review.created_at)}</p>
          </ReviewsItemTop>
          <p>{review.content}</p>
          <hr />
        </li>
      ))}
    </Reviews>
  );
};
