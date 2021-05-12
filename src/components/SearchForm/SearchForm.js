import React from 'react';
import Section from '../Section/Section';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
function SearchForm() {
  const [searchValue, setSearchValue] = React.useState({
    value: '',
    isError: false,
  });

  function handleChange(e) {
    setSearchValue({ value: e.target.value, isError: false });
  }

  function handleSubmit(e) {
    console.log(e.target);
    e.preventDefault();
    if (!searchValue.value) {
      setSearchValue({
        value: '',
        isError: true,
      });
    }
  }

  return (
    <Section className="search-form" tablet="s" phone="m">
      <form onSubmit={handleSubmit} className="search-form__form" noValidate>
        <input
          value={searchValue.value}
          onChange={handleChange}
          className={`search-form__input ${
            searchValue.isError && 'search-form__input_error'
          }`}
          placeholder="Фильм"
          required
        />
        <button className="search-form__submit" type="submit"></button>
        <p className="search-form__error-text">
          {searchValue.isError && 'Нужно ввести ключевое слово'}
        </p>
        <FilterCheckbox />
        <div className="search-form__border" />
      </form>
    </Section>
  );
}

export default SearchForm;
