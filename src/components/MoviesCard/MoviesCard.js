import React from 'react';
import PropTypes from 'prop-types';
import imgSaveActive from '../../images/save-active.svg';
import imgSaveDisable from '../../images/save-disable.svg';
import imgDeleteCard from '../../images/img-delete-card.svg';
import mainApi from '../../utils/mainApi';

import './MoviesCard.css';
function MoviesCard({ data, saveMovies }) {
  const [isSavedMovie, setIsSavedMovie] = React.useState(false);

  function addToSavedMovies() {
    const token = localStorage.getItem('token');
    mainApi
      .saveMovie(token, data)
      .then(() => setIsSavedMovie(true))
      .catch((err) => console.log(err));
  }

  function removeFromSavedMovies() {
    const token = localStorage.getItem('token');
    mainApi
      .deleteSaveMovie(token, data.id)
      .then(() => setIsSavedMovie(false))
      .catch((err) => console.log(err));
  }

  return (
    <li className="movies-card">
      <div className="movies-card__text">
        <p className="movies-card__title">{data.nameRU}</p>
        <p className="movies-card__time">
          {Math.floor(data?.duration / 60)}ч {data?.duration % 60}м
        </p>
      </div>
      <button className="movies-card__button">
        {saveMovies ? (
          <img
            className="movies-card__button-img"
            src={imgDeleteCard}
            alt="Удалить фильм из сохранненых."
          />
        ) : (
          <img
            className="movies-card__button-img"
            onClick={isSavedMovie ? removeFromSavedMovies : addToSavedMovies}
            src={isSavedMovie ? imgSaveActive : imgSaveDisable}
            alt={
              isSavedMovie
                ? 'Удалить фильм из сохранненых.'
                : 'Сохранить фильм.'
            }
          />
        )}
      </button>
      <a
        className="movies-card__link"
        href={data.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies-card__poster"
          src={`${
            data.image?.url
              ? 'https://api.nomoreparties.co' + data.image.url
              : ''
          }`}
          alt="Постер фильма."
        />
      </a>
    </li>
  );
}

MoviesCard.propTypes = {
  data: PropTypes.object,
  saveMovies: PropTypes.bool,
};

export default MoviesCard;
