import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import Section from '../Section/Section';
import Form from '../Form/Form';
function Login({ handleLogin }) {
  const [isRegistrationError, setIsRegistrationError] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsRegistrationError(false);
    handleLogin(email, password).catch((err) => {
      setIsRegistrationError(true);
      console.log(err);
    });
  }

  const formParams = {
    title: 'Рады видеть!',
    inputs: [
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
    isRegistrationError: isRegistrationError,
    submitButtonText: 'Войти',
    questionText: 'Ещё не зарегистрированы?',
    toggleButtonText: 'Регистрация',
    toggleButtonUrl: '/signup',
  };

  return (
    <Section className="login" tablet="m" phone="l">
      <div className="login__container">
        <Form params={formParams} />
      </div>
    </Section>
  );
}

Login.propTypes = {
  handleLogin: PropTypes.func,
};

export default Login;
