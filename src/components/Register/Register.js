import React from 'react';
import './Register.css';
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
  };

  return (
    <section className="register">
      <Form params={formParams} />
    </section>
  );
}

export default Register;
