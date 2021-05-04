import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardLIst from '../MoviesCardList/MoviesCardLIst';
function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardLIst />
      <button className="movies__button-yet">Ещё</button>
    </main>
  );
}

export default Movies;
