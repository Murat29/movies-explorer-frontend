import React from 'react';
import Section from '../Section/Section';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
function SearchForm() {
  return (
    <Section className="search-form" tablet="s" phone="m">
      <form className="search-form__form">
        <input className="search-form__input" placeholder="Фильм" required />
        <button className="search-form__submit" type="submit"></button>
        <FilterCheckbox />
        <div className="search-form__border" />
      </form>
    </Section>
  );
}

export default SearchForm;
