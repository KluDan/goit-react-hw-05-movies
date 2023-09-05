import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useMovieData(fetchFunction) {
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        const fetchedData = await fetchFunction(movieId);
        if (isMounted) {
          setData(fetchedData);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          toast.error(
            'Something wrong with your request, go back and try it later.'
          );
          setError(error);
          setLoading(false);
        }
      }
    }

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [movieId, fetchFunction]);

  return { data, loading, error };
}
