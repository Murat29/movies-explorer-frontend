/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardLIst from '../MoviesCardList/MoviesCardLIst';
import moviesApi from '../../utils/moviesApi';
import filterMovies from '../../utils/filterMovies';
import './Movies.css';

function Movies() {
  const [movies, setMovies] = React.useState([]);
  const [displayedMovies, setDisplayedMovies] = React.useState([]);
  const [movieDisplayCounter, setMovieDisplayCounter] = React.useState(0);
  const [isOpenPreloader, setIsOpenPreloader] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');
  // eslint-disable-next-line no-unused-vars
  const [screen, setScreen] = React.useState(window.screen.availWidth);

  React.useEffect(() => {
    let timer = undefined;
    function updateScreen() {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setScreen(window.screen.availWidth);
      }, 1000);
    }

    window.addEventListener('resize', updateScreen);
  }, []);

  React.useEffect(() => {
    addMoviesToDisplayed();
  }, [movies]);

  function addMoviesToDisplayed() {
    let numberOfAddedMovies = 0;
    const moviesToAdd = [];
    if (movies.length > 0) {
      if (screen > 1009) numberOfAddedMovies = 3;
      else if (screen > 637) numberOfAddedMovies = 2;
      else numberOfAddedMovies = 1;
      for (
        let i = movieDisplayCounter;
        i < movieDisplayCounter + numberOfAddedMovies;
        i++
      ) {
        if (movies[i]) moviesToAdd.push(movies[i]);
        else break;
      }
    }

    setMovieDisplayCounter(movieDisplayCounter + numberOfAddedMovies);
    setDisplayedMovies([...displayedMovies, ...moviesToAdd]);
  }

  function handleSearchSubmit(value) {
    setMovies([]);
    setDisplayedMovies([]);
    setMovieDisplayCounter(0);
    setIsOpenPreloader(true);
    setErrorText('');
    moviesApi
      .getMovies()
      .then((data) => {
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
        displayedMovies={displayedMovies}
        errorText={errorText}
        addMoviesToDisplayed={addMoviesToDisplayed}
        buttonYetInvisibly={movies.length === displayedMovies.length}
      />
    </main>
  );
}

export default Movies;
