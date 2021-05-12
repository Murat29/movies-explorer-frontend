function filterMovies(movies, keyword) {
  return movies.filter((movie) => movie.nameRU.includes(keyword));
}

export default filterMovies;
