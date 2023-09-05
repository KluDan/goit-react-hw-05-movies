import { useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'api';
import styled from 'styled-components';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import toast from 'react-hot-toast';

const MoviesContainer = styled.div`
  padding-inline: 40px;
`;
const NotFoundMessage = styled.p`
  color: #fff;
  font-size: 26px;
`;

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstRequestMade, setFirstRequestMade] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const changeQuery = newQuery => {
    setSearchParams({ query: newQuery });
    setMovies([]);
  };

  useEffect(() => {
    const fetchMoviesBySearch = async () => {
      try {
        if (!query) return;

        setLoading(true);
        const responseData = await fetchMovies(query);

        setMovies(responseData.results);
        setLoading(false);

        if (!firstRequestMade) {
          setFirstRequestMade(true);
        }

        console.log(responseData);
      } catch (error) {
        toast.error('Error fetching movies.');
      }
    };

    fetchMoviesBySearch();
  }, [query, firstRequestMade]);

  const renderNoImagesMessage = () => {
    if (firstRequestMade && movies.length === 0 && !loading) {
      return (
        <NotFoundMessage>
          No movies found for your query: "{query}"!
        </NotFoundMessage>
      );
    }
    return null;
  };

  return (
    <MoviesContainer>
      <Searchbar submitQuery={changeQuery}></Searchbar>

      <MoviesGallery
        key={movies.map(movie => movie.id).join(',')}
        movies={movies}
        loading={loading}
      />
      {renderNoImagesMessage()}
    </MoviesContainer>
  );
};

export default MoviesPage;
