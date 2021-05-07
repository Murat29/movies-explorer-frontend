import React from 'react';
import PropTypes from 'prop-types';
import './MoviesCardList.css';
import Section from '../Section/Section';
import examplePoster from '../../images/examplePoster.png';
import MoviesCard from '../MoviesCard/MoviesCard';
function MoviesCardList({ saveMovies }) {
  const cardsData = [
    { title: '33 слова о дизайне', time: '1ч 47м', image: examplePoster },
    { title: '33 слова о дизайне', time: '1ч 47м', image: examplePoster },
    { title: '33 слова о дизайне', time: '1ч 47м', image: examplePoster },
    { title: '33 слова о дизайне', time: '1ч 47м', image: examplePoster },
    { title: '33 слова о дизайне', time: '1ч 47м', image: examplePoster },
  ];
  return (
    <Section className="movies-card-list" tablet="s" phone="s">
      <ul className="movies-card-list__container">
        {cardsData.map((data, i) => (
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
};

export default MoviesCardList;
