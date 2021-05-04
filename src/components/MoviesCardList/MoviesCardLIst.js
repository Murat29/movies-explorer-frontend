import React from 'react';
import './MoviesCardList.css';
import examplePoster from '../../images/examplePoster.png';
import MoviesCard from '../MoviesCard/MoviesCard';
function MoviesCardList() {
  const cardsData = [
    { title: '33 слова о дизайне', time: '1ч 47м', image: examplePoster },
    { title: '33 слова о дизайне', time: '1ч 47м', image: examplePoster },
    { title: '33 слова о дизайне', time: '1ч 47м', image: examplePoster },
    { title: '33 слова о дизайне', time: '1ч 47м', image: examplePoster },
    { title: '33 слова о дизайне', time: '1ч 47м', image: examplePoster },
  ];
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        {cardsData.map((data, i) => (
          <MoviesCard key={i} data={data} />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
