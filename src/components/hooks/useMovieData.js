import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function useMovieData(fetchFunction) {
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const fetchedData = await fetchFunction(movieId);
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, [movieId, fetchFunction]);

  return { data, loading };
}
