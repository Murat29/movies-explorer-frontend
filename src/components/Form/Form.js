import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';
function Form({ params }) {
  return (
    <form className="form">
      <h2 className="form__title">{params.title}</h2>
      <fieldset className="form__inputs">
        {params.inputs.map((inputData, i) => (
          <div key={i} className="form__input-container">
            <p className="form__input-placeholder">{inputData.placeholder}</p>
            <input className="form__input" type={inputData.type} />
            <p className="form__input-error">Текст ошибки</p>
          </div>
        ))}
      </fieldset>
      <button className="form__submit">{params.submitButtonText}</button>
      <div className="form__container-toggle">
        <p className="form__question-toggle">{params.questionText}</p>
        <button className="form__button-toggle">
          {params.toggleButtonText}
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  params: PropTypes.object,
};

export default Form;
