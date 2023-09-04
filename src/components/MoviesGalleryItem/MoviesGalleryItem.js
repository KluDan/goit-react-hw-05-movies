import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoviesGalleryItemImage } from './MoviesGalleryItem.styled';

const placeholderImage =
  'https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg';

export function MoviesGalleryItem({ movie }) {
  const location = useLocation();
  const isDetailPage = location.pathname === `/movies/${movie.id}`;
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
    : placeholderImage;
  return (
    <>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        <MoviesGalleryItemImage src={posterPath} alt={movie.original_title} />
        {isDetailPage && (
          <>
            <h2>
              {movie.title}(
              {movie.release_date ? movie.release_date.substring(0, 4) : ''})
            </h2>
          </>
        )}
      </Link>
    </>
  );
}
