import { useMovieData } from 'components/hooks/useMovieData';
import { fetchTrendingMovies } from 'api';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
  const { data, loading } = useMovieData(fetchTrendingMovies);
  const movies = data ? data.results : [];
  console.log(movies);

  return (
    <HomeContainer>
      <HomeTitle>Trending Movies</HomeTitle>
      <HomeText>
        Movies move us like nothing else can, whether they’re scary, funny,
        dramatic, romantic or anywhere in-between. So many titles, so much to
        experience.
      </HomeText>

      <MoviesGallery movies={movies} loading={loading} />
    </HomeContainer>
  );
};

export default HomePage;

const HomeContainer = styled.div`
  color: #fff;
  padding-inline: 40px;
`;
const HomeTitle = styled.h1`
  margin-top: 40px;
  font-size: 40px;
  margin-bottom: 30px;
`;
const HomeText = styled.p`
  max-width: 700px;
  font-size: 20px;
  margin-bottom: 30px;
`;
