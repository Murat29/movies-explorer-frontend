import React from 'react';
import './Register.css';
import Section from '../Section/Section';
import Form from '../Form/Form';
function Register() {
  const formParams = {
    title: 'Добро пожаловать!',
    inputs: [
      {
        placeholder: 'Имя',
        type: 'text',
      },
      {
        placeholder: 'E-mail',
        type: 'email',
      },
      {
        placeholder: 'Пароль',
        type: 'password',
      },
    ],
    submitButtonText: 'Зарегистрироваться',
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

export default Register;
