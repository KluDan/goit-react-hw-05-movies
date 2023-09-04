export const ReviewsList = ({ reviews, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!Array.isArray(reviews) || reviews.length === 0) {
    return <div>Cast data is not available.</div>;
  }
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>{<p>{review.content}</p>}</li>
      ))}
    </ul>
  );
};
