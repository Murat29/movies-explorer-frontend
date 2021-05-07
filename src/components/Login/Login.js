import React from 'react';
import './Login.css';
import Section from '../Section/Section';
import Form from '../Form/Form';
function Login() {
  const formParams = {
    title: 'Рады видеть!',
    inputs: [
      {
        placeholder: 'E-mail',
        type: 'email',
      },
      {
        placeholder: 'Пароль',
        type: 'password',
      },
    ],
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

export default Login;
