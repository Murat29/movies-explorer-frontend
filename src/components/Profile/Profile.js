import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
import { useHistory } from 'react-router-dom';
import Section from '../Section/Section';
import mainApi from '../../utils/mainApi';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Profile({ currentUser, setCurrentUser, setLoggedIn }) {
  const history = useHistory();
  const [values, handleChange, errors, isValid, resetForm] =
    useFormWithValidation({ name: currentUser.name, email: currentUser.email });

  function handleSubmit(e) {
    e.preventDefault();
    mainApi
      .updateNameAndEmail(
        localStorage.getItem('token'),
        values.name,
        values.email
      )
      .then((data) => setCurrentUser(data));
    resetForm();
  }

  function handleExtit(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    setCurrentUser({});
    setLoggedIn(false);
    history.push('/');
  }

  return (
    <Section className="profile" tablet="m" phone="l">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form onSubmit={handleSubmit} className="profile__form" noValidate>
        <div className="profile__input-container">
          <p className="profile__input-placeholder">Имя</p>
          <input
            onChange={handleChange}
            value={values.name || ''}
            name="name"
            className="profile__input"
            type="text"
            required
          />
        </div>
        <p className="profile__input-error">{errors.name}</p>
        <div className="profile__border"></div>
        <div className="profile__input-container">
          <p className="profile__input-placeholder">E-mail</p>
          <input
            onChange={handleChange}
            value={values.email || ''}
            name="email"
            className="profile__input"
            type="email"
            required
          />
        </div>
        <p className="profile__input-error">{errors.email}</p>
        <button disabled={!isValid} type="submit" className="profile__button">
          Редактировать
        </button>
        <button
          onClick={handleExtit}
          className="profile__button profile__button_exit"
        >
          Выйти из аккаунта
        </button>
      </form>
    </Section>
  );
}

Profile.propTypes = {
  currentUser: PropTypes.object,
  setCurrentUser: PropTypes.func,
  setLoggedIn: PropTypes.func,
};

export default Profile;
