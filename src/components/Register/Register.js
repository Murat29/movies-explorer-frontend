import React from 'react';
import PropTypes from 'prop-types';
import './Register.css';
import Section from '../Section/Section';
import Form from '../Form/Form';

function Register({ registration }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isRegistrationError, setIsRegistrationError] = React.useState(false);

  function handleChangeNameUser(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsRegistrationError(false);
    registration(name, email, password).catch(() =>
      setIsRegistrationError(true)
    );
  }

  const formParams = {
    title: 'Добро пожаловать!',
    inputs: [
      {
        placeholder: 'Имя',
        type: 'text',
        value: name,
        onChange: handleChangeNameUser,
      },
      {
        placeholder: 'E-mail',
        type: 'email',
        value: email,
        onChange: handleChangeEmail,
      },
      {
        placeholder: 'Пароль',
        type: 'password',
        value: password,
        onChange: handleChangePassword,
      },
    ],
    onSubmit: handleSubmit,
    submitButtonText: 'Зарегистрироваться',
    isRegistrationError: isRegistrationError,
    questionText: 'Уже зарегистрированы?',
    toggleButtonText: 'Войти',
    toggleButtonUrl: '/signin',
  };

  return (
    <Section className="register" tablet="m" phone="l">
      <div className="register__container">
        <Form params={formParams} />
      </div>
    </Section>
  );
}

Register.propTypes = {
  registration: PropTypes.func,
};

export default Register;
