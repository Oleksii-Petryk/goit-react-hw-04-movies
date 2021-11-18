const KEY = "f415c580c0cee9380f8fcdff47b189dc";

const fetchMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`404 - NOT FOUND`));
  });
};

const fetchMoviesById = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`404 - NOT FOUND`));
  });
};

const fetchMoviesCast = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`404 - NOT FOUND`));
  });
};

const fetchMoviesReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`404 - NOT FOUND`));
  });
};

const fetchMoviesByName = (requestedMovie) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${requestedMovie}&page=1&include_adult=false`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`404 - NOT FOUND`));
  });
};

const API = {
  fetchMovies,
  fetchMoviesById,
  fetchMoviesCast,
  fetchMoviesReviews,
  fetchMoviesByName,
};

export default API;
