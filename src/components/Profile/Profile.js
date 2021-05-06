import React from 'react';
import Section from '../Section/Section';
import './Profile.css';
function Profile() {
  const [name, setName] = React.useState('Виталий');
  const [email, setEmail] = React.useState('pochta@yandex.ru');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <Section className="profile" tablet="m" phone="l">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form">
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
        <button className="profile__button">Редактировать</button>
        <button className="profile__button profile__button_exit">
          Выйти из аккаунта
        </button>
      </form>
    </Section>
  );
}

export default Profile;
