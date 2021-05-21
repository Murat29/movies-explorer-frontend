import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
import { useHistory } from 'react-router-dom';
import Section from '../Section/Section';
import mainApi from '../../utils/mainApi';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ setCurrentUser, setLoggedIn }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [formDisabled, setFormDisabled] = React.useState(false);

  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [values, handleChange, errors, isValid, resetForm] =
    useFormWithValidation({ name: currentUser.name, email: currentUser.email });
  const [message, setMessage] = React.useState({ value: '', status: false });

  function handleSubmit(e) {
    e.preventDefault();
    setFormDisabled(true);
    setMessage({ ...message, value: '' });
    mainApi
      .updateNameAndEmail(
        localStorage.getItem('token'),
        values.name,
        values.email
      )
      .then((data) => {
        setCurrentUser(data);
        setMessage({
          value: 'Обновлении профиля прошло успешно.',
          status: true,
        });
      })
      .catch((err) => {
        let errorMessage;
        if (err.includes('409'))
          errorMessage = 'Пользователь с таким email уже существует.';
        else errorMessage = ' При обновлении профиля произошла ошибка.';
        setMessage({ value: errorMessage, status: false });
      })
      .finally(() => setFormDisabled(false));
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
        <fieldset className="profile__fieldset" disabled={formDisabled}>
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
          <p
            className={`profile__message ${
              message.status && 'profile__message_correct'
            }`}
          >
            {message.value}
          </p>
          <button disabled={!isValid} type="submit" className="profile__button">
            Редактировать
          </button>
          <button
            onClick={handleExtit}
            className="profile__button profile__button_exit"
          >
            Выйти из аккаунта
          </button>
        </fieldset>
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
