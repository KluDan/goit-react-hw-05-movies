import { Suspense, useRef } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { fetchMovieById } from 'api';
import { useMovieData } from 'components/hooks/useMovieData';

const MoviePage = () => {
  const { data: movie, loading } = useMovieData(fetchMovieById);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  return (
    <div>
      {movie && (
        <div>
          <Link to={backLinkLocationRef.current}>
            <BsFillArrowLeftCircleFill />
            Go back
          </Link>

          <MoviesGalleryItem movie={movie} />
        </div>
      )}
      <ul>
        <li>
          <Link to="./cast">Cast</Link>
        </li>
        <li>
          <Link to="./reviews">Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<>Loading subpage...</>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviePage;
