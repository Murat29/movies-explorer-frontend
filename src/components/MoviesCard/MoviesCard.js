import React from 'react';
import PropTypes from 'prop-types';
import imgSaveActive from '../../images/save-active.svg';
import imgSaveDisable from '../../images/save-disable.svg';

import './MoviesCard.css';
function MoviesCard({ data }) {
  const [saveActive, setSaveActive] = React.useState(false);

  function toggleSaveActive() {
    setSaveActive(!saveActive);
  }
  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text">
          <p className="movies-card__title">{data.title}</p>
          <p className="movies-card__time">{data.time}</p>
        </div>
        <img
          className="movies-card__save-img"
          onClick={toggleSaveActive}
          src={saveActive ? imgSaveActive : imgSaveDisable}
        />
      </div>

      <img
        className="movies-card__poster"
        src={data.image}
        alt="Постер фильма."
      />
    </li>
  );
}

MoviesCard.propTypes = {
  data: PropTypes.object,
};

export default MoviesCard;
