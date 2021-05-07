import React from 'react';
import './FilterCheckbox.css';
function FilterCheckbox() {
  return (
    <label className="filter-checkbox">
      <input
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

export default FilterCheckbox;
