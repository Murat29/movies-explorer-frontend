import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import Section from '../Section/Section';
import Form from '../Form/Form';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Login({ handleLogin }) {
  const [isRegistrationError, setIsRegistrationError] = React.useState('');

  const [values, handleChange, errors, isValid, resetForm] =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    setIsRegistrationError('');
    setIsRegistrationError(false);
    handleLogin(values.email, values.password).catch((err) => {
      let errorMessage;
      if (err.includes('401'))
        errorMessage = 'Вы ввели неправильный логин или пароль.';
      else errorMessage = 'При авторизации произошла ошибка.';
      setIsRegistrationError(errorMessage);
    });
    resetForm();
  }

  const formParams = {
    title: 'Рады видеть!',
    inputs: [
      {
        placeholder: 'E-mail',
        type: 'email',
        value: values.email || '',
        onChange: handleChange,
        name: 'email',
        error: errors.email,
      },
      {
        placeholder: 'Пароль',
        type: 'password',
        value: values.password || '',
        onChange: handleChange,
        name: 'password',
        error: errors.password,
        minLength: 4,
      },
    ],
    isValid: isValid,
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
