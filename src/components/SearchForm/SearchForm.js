import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({
  onSubmit,
  isShortMosies,
  setIsShortMosies,
  searchValue,
  setSearchValue,
}) {
  const [isError, setIsError] = React.useState(false);

  function handleChange(e) {
    setSearchValue(e.target.value);
    setIsError(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchValue) {
      setIsError(true);
    } else {
      onSubmit();
    }
  }

  return (
    <Section className="search-form" tablet="s" phone="m">
      <form onSubmit={handleSubmit} className="search-form__form" noValidate>
        <input
          value={searchValue}
          onChange={handleChange}
          className={`search-form__input ${
            isError && 'search-form__input_error'
          }`}
          placeholder="Фильм"
          required
        />
        <button className="search-form__submit" type="submit"></button>
        <p className="search-form__error-text">
          {isError && 'Нужно ввести ключевое слово'}
        </p>
        <FilterCheckbox
          isShortMosies={isShortMosies}
          setIsShortMosies={setIsShortMosies}
        />
        <div className="search-form__border" />
      </form>
    </Section>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
  setIsShortMosies: PropTypes.func,
  isShortMosies: PropTypes.bool,
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
};

export default SearchForm;
