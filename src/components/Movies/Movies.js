import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardLIst from '../MoviesCardList/MoviesCardLIst';
import filterMovies from '../../utils/filterMovies';
import './Movies.css';

function Movies({ indexesOfSavedMovies, movies }) {
  const [displayedMovies, setDisplayedMovies] = React.useState([]);
  const [numberOfMoviesDisplayed, setNumberOfMoviesDisplayed] =
    React.useState(0);
  const [isOpenPreloader, setIsOpenPreloader] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');
  const [screen, setScreen] = React.useState(window.screen.availWidth);
  const [isShortMosies, setIsShortMosies] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  React.useEffect(() => {
    let savedMovies = JSON.parse(localStorage.getItem('movies'));
    if (savedMovies === null) savedMovies = [];
    setDisplayedMovies(savedMovies);

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
    localStorage.setItem('movies', JSON.stringify(displayedMovies));
  }, [displayedMovies]);

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
        moviesLength ? moviesLength : displayedMovies.length
      )
    );
  }

  function handleSearchSubmit() {
    setDisplayedMovies([]);
    setIsOpenPreloader(true);
    setErrorText('');
    const filteredMovies = filterMovies(movies, searchValue, isShortMosies);
    let newErrorText = '';
    if (filteredMovies.length === 0) newErrorText = 'Ничего не найдено';
    setErrorText(newErrorText);
    setDisplayedMovies(filteredMovies);
    showMoreMovies(true, Boolean(newErrorText), filteredMovies.length);
    setIsOpenPreloader(false);
  }

  return (
    <main className="movies">
      <SearchForm
        onSubmit={handleSearchSubmit}
        isShortMosies={isShortMosies}
        setIsShortMosies={setIsShortMosies}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <MoviesCardLIst
        isOpenPreloader={isOpenPreloader}
        displayedMovies={
          numberOfMoviesDisplayed === 0
            ? []
            : displayedMovies.slice(0, numberOfMoviesDisplayed)
        }
        errorText={errorText}
        showMoreMovies={showMoreMovies}
        buttonYetInvisibly={displayedMovies.length === numberOfMoviesDisplayed}
        indexesOfSavedMovies={indexesOfSavedMovies}
      />
    </main>
  );
}

Movies.propTypes = {
  indexesOfSavedMovies: PropTypes.array,
  movies: PropTypes.array,
};

export default Movies;
