import React from 'react';
import './SavedMovies.css';
import MoviesCardLIst from '../MoviesCardList/MoviesCardLIst';
import SearchForm from '../SearchForm/SearchForm';
function SavedMovies() {
  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardLIst saveMovies={true} />
    </main>
  );
}

export default SavedMovies;
