import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '300c337896282f66953f2120fd2615e0';

const makeRequest = async (url, params = {}) => {
  try {
    const response = await axios.get(url, {
      params: { api_key: API_KEY, ...params },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTrendingMovies = () => makeRequest('/trending/all/day');

export const fetchMovies = query => makeRequest('/search/movie', { query });

export const fetchMovieById = movieId => makeRequest(`/movie/${movieId}`);

export const fetchMovieCastById = movieId =>
  makeRequest(`/movie/${movieId}/credits`);

export const fetchMovieReviewsById = movieId =>
  makeRequest(`/movie/${movieId}/reviews`);
