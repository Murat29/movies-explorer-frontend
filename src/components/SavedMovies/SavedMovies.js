import React from 'react';
import PropTypes from 'prop-types';
import './SavedMovies.css';
import MoviesCardLIst from '../MoviesCardList/MoviesCardLIst';
import SearchForm from '../SearchForm/SearchForm';
import filterMovies from '../../utils/filterMovies';

function SavedMovies({ savedMovies, setSavedMovies, updateSavedMovies }) {
  const [isShortMosies, setIsShortMosies] = React.useState(false);
  const [isSearch, setIsSearch] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    updateSavedMovies();
  }, []);

  function deleteDisplayeMovie(id) {
    const index = savedMovies.map((el) => el.id).indexOf(id);
    if (index > -1) {
      savedMovies.splice(index, 1);
      setSavedMovies([...savedMovies]);
    }
  }

  function handleSearchSubmit() {
    setIsSearch(true);
    setSearchQuery(searchValue);
  }

  return (
    <main className="saved-movies">
      <SearchForm
        onSubmit={handleSearchSubmit}
        isShortMosies={isShortMosies}
        setIsShortMosies={setIsShortMosies}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <MoviesCardLIst
        isSavedMoviesPage={true}
        displayedMovies={
          isSearch
            ? filterMovies(savedMovies, searchQuery, isShortMosies)
            : savedMovies
        }
        indexesOfSavedMovies={[]}
        deleteDisplayeMovie={deleteDisplayeMovie}
      />
    </main>
  );
}

SavedMovies.propTypes = {
  savedMovies: PropTypes.array,
  setSavedMovies: PropTypes.func,
  updateSavedMovies: PropTypes.func,
};

export default SavedMovies;
