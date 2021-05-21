import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import Section from '../Section/Section';
import Form from '../Form/Form';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Login({ handleLogin }) {
  const [isRegistrationError, setIsRegistrationError] = React.useState('');
  const [formDisabled, setFormDisabled] = React.useState(false);
  const [values, handleChange, errors, isValid] = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    setFormDisabled(true);
    setIsRegistrationError('');
    setIsRegistrationError(false);
    handleLogin(values.email, values.password)
      .catch((err) => {
        let errorMessage;
        if (err.includes('401'))
          errorMessage = 'Вы ввели неправильный логин или пароль.';
        else errorMessage = 'При авторизации произошла ошибка.';
        setIsRegistrationError(errorMessage);
      })
      .finally(() => setFormDisabled(false));
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
        <Form params={formParams} formDisabled={formDisabled} />
      </div>
    </Section>
  );
}

Login.propTypes = {
  handleLogin: PropTypes.func,
};

export default Login;
