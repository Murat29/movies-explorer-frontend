import React from 'react';
import PropTypes from 'prop-types';
import './SavedMovies.css';
import MoviesCardLIst from '../MoviesCardList/MoviesCardLIst';
import SearchForm from '../SearchForm/SearchForm';
function SavedMovies({ savedMovies, setSavedMovies }) {
  function deleteDisplayeMovie(id) {
    const index = savedMovies.map((el) => el.id).indexOf(id);
    if (index > -1) {
      savedMovies.splice(index, 1);
      setSavedMovies([...savedMovies]);
    }
  }

  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardLIst
        isSavedMoviesPage={true}
        displayedMovies={savedMovies}
        indexesOfSavedMovies={[]}
        deleteDisplayeMovie={deleteDisplayeMovie}
      />
    </main>
  );
}

SavedMovies.propTypes = {
  savedMovies: PropTypes.array,
  setSavedMovies: PropTypes.func,
};

export default SavedMovies;
