import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardLIst from '../MoviesCardList/MoviesCardLIst';
import moviesApi from '../../utils/moviesApi';
import filterMovies from '../../utils/filterMovies';
import './Movies.css';

function Movies() {
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
    // window.addEventListener('beforeunload', () => {
    //   localStorage.setItem('movies', JSON.stringify(movies));
    //   localStorage.setItem('numberOfMoviesDisplayed', String(numberOfMoviesDisplayed));
    // });
    window.addEventListener('resize', updateScreen);
  }, []);

  function showMoreMovies() {
    let numberOfAddedMovies = 0;
    if (screen > 1009) numberOfAddedMovies = 3;
    else if (screen > 637) numberOfAddedMovies = 2;
    else numberOfAddedMovies = 1;

    setNumberOfMoviesDisplayed(numberOfMoviesDisplayed + numberOfAddedMovies);
    localStorage.setItem(
      'numberOfMoviesDisplayed',
      String(numberOfMoviesDisplayed + numberOfAddedMovies)
    );
  }

  function handleSearchSubmit(value) {
    setMovies([]);
    setNumberOfMoviesDisplayed(0);
    setIsOpenPreloader(true);
    setErrorText('');
    moviesApi
      .getMovies()
      .then((data) => {
        const filteredMovies = filterMovies(data, value);
        if (filteredMovies.length === 0) setErrorText('Ничего не найдено');
        showMoreMovies();
        setMovies(filteredMovies);
        localStorage.setItem('movies', JSON.stringify(filteredMovies));
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
        buttonYetInvisibly={movies.length === numberOfMoviesDisplayed - 1}
      />
    </main>
  );
}

export default Movies;
