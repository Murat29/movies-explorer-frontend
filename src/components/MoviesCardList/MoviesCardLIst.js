import React from 'react';
import PropTypes from 'prop-types';
import './MoviesCardList.css';
import Section from '../Section/Section';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
function MoviesCardList({
  isSavedMoviesPage,
  displayedMovies,
  isOpenPreloader,
  errorText,
  showMoreMovies,
  buttonYetInvisibly,
  indexesOfSavedMovies,
  deleteDisplayeMovie,
}) {
  function handleClick() {
    showMoreMovies(false, false);
  }

  return (
    <Section className="movies-card-list" tablet="s" phone="s">
      {isOpenPreloader && <Preloader />}
      <p className="movies-card__error">{errorText}</p>
      <ul className="movies-card-list__container">
        {displayedMovies.map((data) => (
          <MoviesCard
            key={data.id}
            data={data}
            isSavedMoviesPage={isSavedMoviesPage}
            indexesOfSavedMovies={indexesOfSavedMovies}
            deleteDisplayeMovie={deleteDisplayeMovie}
          />
        ))}
      </ul>
      {!isSavedMoviesPage && (
        <button
          onClick={handleClick}
          className={`movies-card-list__button-yet ${
            buttonYetInvisibly && 'movies-card-list__button-yet_invisibly'
          }`}
        >
          Ещё
        </button>
      )}
    </Section>
  );
}

MoviesCardList.propTypes = {
  isSavedMoviesPage: PropTypes.bool,
  displayedMovies: PropTypes.array,
  isOpenPreloader: PropTypes.bool,
  errorText: PropTypes.string,
  showMoreMovies: PropTypes.func,
  buttonYetInvisibly: PropTypes.bool,
  indexesOfSavedMovies: PropTypes.array,
  deleteDisplayeMovie: PropTypes.func,
};

export default MoviesCardList;
