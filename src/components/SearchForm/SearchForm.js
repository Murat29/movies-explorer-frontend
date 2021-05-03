import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import submit from '../../images/submit.svg';
import './SearchForm.css';
function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <input className="search-form__input" placeholder="Фильм" />
        <button className="search-form__submit" type="submit">
          <img src={submit} className="search-form__submit-img" />
        </button>
        <FilterCheckbox />
        <div className="search-form__border" />
      </form>
    </section>
  );
}

export default SearchForm;
