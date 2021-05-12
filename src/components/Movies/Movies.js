/* eslint-disable no-undef */
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardLIst from '../MoviesCardList/MoviesCardLIst';
import moviesApi from '../../utils/moviesApi';
import filterMovies from '../../utils/filterMovies';
import './Movies.css';

function Movies() {
  const [movies, setMovies] = React.useState([]);
  const [isOpenPreloader, setIsOpenPreloader] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');

  function handleSearchSubmit(value) {
    setMovies([]);
    setIsOpenPreloader(true);
    moviesApi
      .getMovies()
      .then((data) => {
        throw 'error';
        // eslint-disable-next-line no-unreachable
        const filteredMovies = filterMovies(data, value);
        if (filteredMovies.length === 0) setErrorText('Ничего не найдено');
        else setMovies(filteredMovies);
      })
      .catch(() =>
        setErrorText(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        )
      )
      .finally(() => setIsOpenPreloader(false));
  }

  return (
    <main className="movies">
      <SearchForm onSubmit={handleSearchSubmit} />
      <MoviesCardLIst
        isOpenPreloader={isOpenPreloader}
        movies={movies}
        errorText={errorText}
      />
    </main>
  );
}

export default Movies;
