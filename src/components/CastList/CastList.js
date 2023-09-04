export const CastList = ({ cast, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <p>{actor.original_name}</p>
        </li>
      ))}
    </ul>
  );
};
