import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardLIst from '../MoviesCardList/MoviesCardLIst';
import moviesApi from '../../utils/moviesApi';
import filterMovies from '../../utils/filterMovies';
import './Movies.css';

function Movies({ indexesOfSavedMovies }) {
  const [movies, setMovies] = React.useState([]);
  const [numberOfMoviesDisplayed, setNumberOfMoviesDisplayed] =
    React.useState(0);
  const [isOpenPreloader, setIsOpenPreloader] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');
  const [screen, setScreen] = React.useState(window.screen.availWidth);

  React.useEffect(() => {
    let savedMovies = JSON.parse(localStorage.getItem('movies'));
    if (savedMovies === null) savedMovies = [];
    setMovies(savedMovies);

    let savedNumber = window.localStorage.getItem('numberOfMoviesDisplayed');
    if (savedNumber === null) savedNumber = 0;
    setNumberOfMoviesDisplayed(+savedNumber);

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
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  React.useEffect(() => {
    localStorage.setItem(
      'numberOfMoviesDisplayed',
      String(numberOfMoviesDisplayed)
    );
  }, [numberOfMoviesDisplayed]);

  function showMoreMovies(isSubmit, isNothingFound, moviesLength) {
    let numberOfAddedMovies = 0;
    if (!isNothingFound) {
      if (screen > 1009) numberOfAddedMovies = 3;
      else if (screen > 637) numberOfAddedMovies = 2;
      else numberOfAddedMovies = 1;
    }

    setNumberOfMoviesDisplayed(
      Math.min(
        (isSubmit ? 0 : numberOfMoviesDisplayed) + numberOfAddedMovies,
        moviesLength ? moviesLength : movies.length
      )
    );
  }

  function handleSearchSubmit(value) {
    setMovies([]);
    setIsOpenPreloader(true);
    setErrorText('');
    moviesApi
      .getMovies()
      .then((data) => {
        const filteredMovies = filterMovies(data, value);
        let newErrorText = '';
        if (filteredMovies.length === 0) newErrorText = 'Ничего не найдено';
        setErrorText(newErrorText);
        setMovies(filteredMovies);
        showMoreMovies(true, Boolean(newErrorText), filteredMovies.length);
        console.log(filteredMovies);
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
        displayedMovies={
          numberOfMoviesDisplayed === 0
            ? []
            : movies.slice(0, numberOfMoviesDisplayed)
        }
        errorText={errorText}
        showMoreMovies={showMoreMovies}
        buttonYetInvisibly={movies.length === numberOfMoviesDisplayed}
        indexesOfSavedMovies={indexesOfSavedMovies}
      />
    </main>
  );
}

Movies.propTypes = {
  indexesOfSavedMovies: PropTypes.array,
};

export default Movies;
