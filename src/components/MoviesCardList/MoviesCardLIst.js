import React from 'react';
import PropTypes from 'prop-types';
import './MoviesCardList.css';
import Section from '../Section/Section';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
function MoviesCardList({
  saveMovies,
  displayedMovies,
  isOpenPreloader,
  errorText,
  addMoviesToDisplayed,
  buttonYetInvisibly,
}) {
  return (
    <Section className="movies-card-list" tablet="s" phone="s">
      {isOpenPreloader && <Preloader />}
      <p className="movies-card__error">{errorText}</p>
      <ul className="movies-card-list__container">
        {displayedMovies.map((data, i) => (
          <MoviesCard key={i} data={data} saveMovies={saveMovies} />
        ))}
      </ul>
      {!saveMovies && (
        <button
          onClick={addMoviesToDisplayed}
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
  saveMovies: PropTypes.bool,
  displayedMovies: PropTypes.array,
  isOpenPreloader: PropTypes.bool,
  errorText: PropTypes.string,
  addMoviesToDisplayed: PropTypes.func,
  buttonYetInvisibly: PropTypes.bool,
};

export default MoviesCardList;
