import React from 'react';
import Title from '../Title/Title';
import avatar from '../../images/avatar.png';
import arrow from '../../images/arrow.svg';
import './AboutMe.css';
function AboutMe() {
  return (
    <section className="about-me">
      <Title>Студент</Title>
      <div className="about-me__description">
        <div className="about-me__text-container">
          <p className="about-me__name">Виталий</p>
          <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__about">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className="about-me__links">
            <a href="#" className="about-me__link about-me__link_description">
              Facebook
            </a>
            <a href="#" className="about-me__link about-me__link_description">
              Github
            </a>
          </div>
        </div>
        <img className="about-me__avatar" src={avatar} alt="Аватар." />
      </div>
      <h3 className="about-me__title">Портфолио</h3>
      <div className="about-me__portfolio-link-container">
        <a href="#" className="about-me__link about-me__link_portfolio">
          Статичный сайт
        </a>
        <a href="#" className="about-me__link about-me__portfolio-link-img">
          <img src={arrow} alt="Ссылка на работу." />
        </a>
      </div>
      <div className="about-me__link about-me__portfolio-link-container">
        <a href="#" className="about-me__link about-me__link_portfolio">
          Адаптивный сайт
        </a>
        <a href="#" className="about-me__link about-me__portfolio-link-img">
          <img src={arrow} alt="Ссылка на работу." />
        </a>
      </div>
      <div className="about-me__portfolio-link-container">
        <a href="#" className="about-me__link about-me__link_portfolio">
          Одностраничное приложение
        </a>
        <a href="#" className="about-me__link about-me__portfolio-link-img">
          <img src={arrow} alt="Ссылка на работу." />
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
