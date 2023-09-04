import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '300c337896282f66953f2120fd2615e0';

export const fetchTrendingMovies = async () => {
  return await axios
    .get('/trending/all/day', {
      params: {
        api_key: API_KEY,
      },
    })
    .then(response => response.data);
};

export const fetchMovieById = async movieId => {
  return await axios
    .get(`/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(response => response.data);
};

export const fetchMovieCastById = async movieId => {
  return await axios
    .get(`/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(response => response.data);
};

export const fetchMovieReviewsById = async movieId => {
  return await axios
    .get(`/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(response => response.data);
};

export const fetchMovies = async query => {
  return await axios
    .get('/search/movie', {
      params: {
        api_key: API_KEY,
        query: query,
      },
    })
    .then(response => response.data);
};
