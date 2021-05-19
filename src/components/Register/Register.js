import React from 'react';
import PropTypes from 'prop-types';
import './Register.css';
import Section from '../Section/Section';
import Form from '../Form/Form';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Register({ handleRegistration }) {
  const [isRegistrationError, setIsRegistrationError] = React.useState(false);
  const [values, handleChange, errors, isValid, resetForm] =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    setIsRegistrationError(false);
    handleRegistration(values.name, values.email, values.password).catch(() => {
      setIsRegistrationError(true);
    });
    resetForm();
  }

  const formParams = {
    title: 'Добро пожаловать!',
    inputs: [
      {
        placeholder: 'Имя',
        type: 'text',
        value: values.name || '',
        onChange: handleChange,
        name: 'name',
        error: errors.name,
        pattern: '^[А-Яа-яЁёA-Za-z- ]+$',
        minLength: 2,
      },
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

Register.propTypes = {
  handleRegistration: PropTypes.func,
};

export default Register;
