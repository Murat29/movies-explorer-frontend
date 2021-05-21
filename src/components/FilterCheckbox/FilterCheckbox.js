import React from 'react';
import PropTypes from 'prop-types';
import './FilterCheckbox.css';
function FilterCheckbox({ isShortMosies, setIsShortMosies }) {
  function handleChange() {
    setIsShortMosies(!isShortMosies);
  }

  return (
    <label className="filter-checkbox">
      <input
        onChange={handleChange}
        checked={isShortMosies}
        className="filter-checkbox__invisible-checkbox"
        type="checkbox"
        id="filter-shortfilm"
        name="shortfilm"
        value="true"
      />
      <span className="filter-checkbox__visible-checkbox"></span>
      <p className="filter-checkbox__text">Короткометражки</p>
    </label>
  );
}

FilterCheckbox.propTypes = {
  isShortMosies: PropTypes.bool,
  setIsShortMosies: PropTypes.func,
};

export default FilterCheckbox;
