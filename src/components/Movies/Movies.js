import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardLIst from '../MoviesCardList/MoviesCardLIst';
function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardLIst />
    </main>
  );
}

export default Movies;
