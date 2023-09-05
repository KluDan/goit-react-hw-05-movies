import { Suspense, useRef } from 'react';
import { useLocation, Outlet, NavLink } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

import { fetchMovieById } from 'api';
import { useMovieData } from 'components/hooks/useMovieData';
import styled from 'styled-components';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

const MoviePage = () => {
  const { data: movie, error } = useMovieData(fetchMovieById);
  console.log(movie);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  return (
    <MoviePageContainer>
      <Link to={backLinkLocationRef.current}>
        <BackLink>
          <BsFillArrowLeftCircleFill />
          <p>Go back</p>
        </BackLink>
      </Link>
      {movie && (
        <div>
          <MovieDetails movie={movie} />
        </div>
      )}
      {error ? (
        <></>
      ) : (
        <Details>
          <DetailsList>
            <li>
              <Link to="./cast">Cast</Link>
            </li>
            <li>
              <Link to="./reviews">Reviews</Link>
            </li>
          </DetailsList>
        </Details>
      )}

      <Suspense fallback={<>Loading subpage...</>}>
        <Outlet />
      </Suspense>
    </MoviePageContainer>
  );
};

export default MoviePage;

const MoviePageContainer = styled.div`
  color: #fff;
`;
const BackLink = styled.div`
  position: absolute;
  top: 20px;
  width: 80px;
  z-index: 14;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #df0912;
  background-color: #df0912;

  border-radius: 5px;
  padding: 5px;
  gap: 5px;
  font-size: 14px;
  margin-left: 40px;
  color: #fff;
`;
const Link = styled(NavLink)`
  font-size: 34px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  position: relative;

  &.active {
    color: #df0912;

    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #df0912;
    }
  }
`;
const Details = styled.div`
  margin-bottom: 20px;
  padding-inline: 40px;
`;
const DetailsList = styled.ul`
  display: flex;
  gap: 30px;
`;
