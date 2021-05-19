import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
import { useHistory } from 'react-router-dom';
import Section from '../Section/Section';
import mainApi from '../../utils/mainApi';
function Profile({ currentUser, setCurrentUser, setLoggedIn }) {
  const history = useHistory();
  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    mainApi
      .updateNameAndEmail(localStorage.getItem('token'), name, email)
      .then((data) => setCurrentUser(data));
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
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form onSubmit={handleSubmit} className="profile__form">
        <div className="profile__input-container">
          <p className="profile__input-placeholder">Имя</p>
          <input
            onChange={handleChangeName}
            value={name}
            className="profile__input"
            type="text"
          />
        </div>
        <div className="profile__border"></div>
        <div className="profile__input-container">
          <p className="profile__input-placeholder">E-mail</p>
          <input
            onChange={handleChangeEmail}
            value={email}
            className="profile__input"
            type="email"
          />
        </div>
        <button type="submit" className="profile__button">
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
