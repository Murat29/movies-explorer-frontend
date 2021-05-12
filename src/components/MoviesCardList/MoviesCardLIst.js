import React from 'react';
import PropTypes from 'prop-types';
import './MoviesCardList.css';
import Section from '../Section/Section';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
function MoviesCardList({ saveMovies, movies, isOpenPreloader, errorText }) {
  return (
    <Section className="movies-card-list" tablet="s" phone="s">
      {isOpenPreloader && <Preloader />}
      <p className="movies-card__error">{errorText}</p>
      <ul className="movies-card-list__container">
        {movies.map((data, i) => (
          <MoviesCard key={i} data={data} saveMovies={saveMovies} />
        ))}
      </ul>
      {!saveMovies && (
        <button className="movies-card-list__button-yet">Ещё</button>
      )}
    </Section>
  );
}

MoviesCardList.propTypes = {
  saveMovies: PropTypes.bool,
  movies: PropTypes.array,
  isOpenPreloader: PropTypes.bool,
  errorText: PropTypes.string,
};

export default MoviesCardList;
