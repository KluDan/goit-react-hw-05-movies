import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './AppLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MoviePage = lazy(() => import('../pages/MoviePage'));
const MovieCast = lazy(() => import('./MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MoviePage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
