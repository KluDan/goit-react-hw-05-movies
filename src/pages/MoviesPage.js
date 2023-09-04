import { Link, useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'api';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

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
    if (!query) return;
    const fetchMoviesBySearch = async () => {
      try {
        setLoading(true);
        const responseData = await fetchMovies(query);

        setMovies(responseData.results);
        setLoading(false);
        if (!firstRequestMade) {
          setFirstRequestMade(true);
        }

        console.log(responseData);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchMoviesBySearch();
  }, [query]);
  return (
    <>
      <Searchbar submitQuery={changeQuery}></Searchbar>

      <MoviesGallery
        key={movies.map(movie => movie.id).join(',')}
        movies={movies}
        loading={loading}
      />
      {firstRequestMade && movies.length === 0 && !loading && (
        <div className="no-images-message">No movies found.</div>
      )}
    </>
  );
};

export default MoviesPage;
