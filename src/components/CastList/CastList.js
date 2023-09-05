import { LoadingSpinner } from 'components/LoadingSpinner';
import { ActorList, ActorListItem } from './CastList.styled';

export const CastList = ({ cast, loading }) => {
  if (loading) {
    return <LoadingSpinner />;
  }
  if (!Array.isArray(cast) || cast.length === 0) {
    return <div>Reviews data is not available.</div>;
  }
  const placeholderImage =
    'https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg';
  return (
    <ActorList>
      {cast.slice(0, 6).map(actor => {
        const posterPath = actor.profile_path
          ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
          : placeholderImage;
        return (
          <ActorListItem key={actor.id}>
            <img src={posterPath} alt={actor.original_name} />
            <p>{actor.original_name}</p>
            <p>{actor.character}</p>
          </ActorListItem>
        );
      })}
    </ActorList>
  );
};
