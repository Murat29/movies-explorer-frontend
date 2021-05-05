import React from 'react';
import './Login.css';
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
    submitButtonText: 'Зарегистрироваться',
    questionText: 'Уже зарегистрированы?',
    toggleButtonText: 'Войти',
  };

  return (
    <section className="login">
      <Form params={formParams} />
    </section>
  );
}

export default Login;
