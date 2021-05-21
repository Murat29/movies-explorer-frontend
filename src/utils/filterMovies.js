function filterMovies(movies, keyword, isShortMosies) {
  function findNameAndDescription(movie, keyword) {
    return (
      movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) ||
      movie.description.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  return movies.filter((movie) => {
    if (isShortMosies) {
      return findNameAndDescription(movie, keyword) && movie.duration < 41;
    } else {
      return findNameAndDescription(movie, keyword);
    }
  });
}

export default filterMovies;
