import React from 'react';
import { BiLogoImdb } from 'react-icons/bi';
import {
  MovieContent,
  MovieDescr,
  MovieDescrText,
  MovieItem,
  MoviePoster,
  MoviesGalleryItemBackground,
  MoviesGalleryItemBlock,
  MoviesGalleryItemImg,
  MovieShortDetails,
  MovieTitle,
} from './MovieDetails.styled';

const placeholderImage =
  'https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg';

export function MovieDetails({ movie }) {
  const backdropPath = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
    : placeholderImage;
  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    : placeholderImage;
  function minutesToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}hr ${remainingMinutes}min`;
  }
  const formattedTime = minutesToHoursAndMinutes(movie.runtime);

  return (
    <MovieItem>
      <MoviesGalleryItemBackground>
        <MoviesGalleryItemBlock>
          <MoviesGalleryItemImg src={backdropPath} alt={movie.original_title} />
        </MoviesGalleryItemBlock>
      </MoviesGalleryItemBackground>
      <MovieContent>
        <MoviePoster>
          <img src={posterPath} alt={movie.original_title}></img>
        </MoviePoster>
        <MovieDescr>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieShortDetails>
            <span>
              {movie.release_date ? movie.release_date.substring(0, 4) : ''}
            </span>
            <span>{formattedTime}</span>
            <BiLogoImdb size="42" fill="white" />
            <span>{movie.vote_average.toFixed(1)}</span>
          </MovieShortDetails>

          <MovieDescrText>{movie.overview}</MovieDescrText>
        </MovieDescr>
      </MovieContent>
    </MovieItem>
  );
}
