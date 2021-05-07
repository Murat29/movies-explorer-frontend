import React from 'react';
import Section from '../Section/Section';
import Title from '../Title/Title';
import avatar from '../../images/avatar.png';
import arrow from '../../images/arrow.svg';
import './AboutMe.css';
function AboutMe() {
  return (
    <Section className="about-me" id="about-me" tablet="m" phone="m">
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
            <a
              className="about-me__link about-me__link_description"
              href="https://t.me/SPB_Akmurat_Khodzhatovtov"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
            <a
              className="about-me__link about-me__link_description"
              href="https://github.com/Murat29"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <img className="about-me__avatar" src={avatar} alt="Аватар." />
      </div>
      <h3 className="about-me__title">Портфолио</h3>
      <div className="about-me__portfolio-link-container">
        <a
          className="about-me__link about-me__link_portfolio"
          href="https://github.com/Murat29/how-to-learn"
          target="_blank"
          rel="noreferrer"
        >
          Статичный сайт
        </a>
        <a
          className="about-me__link about-me__portfolio-link-img"
          href="https://github.com/Murat29/how-to-learn"
          target="_blank"
          rel="noreferrer"
        >
          <img src={arrow} alt="Ссылка на работу." />
        </a>
      </div>
      <div className="about-me__link about-me__portfolio-link-container">
        <a
          className="about-me__link about-me__link_portfolio"
          href="https://github.com/Murat29/russian-travel"
          target="_blank"
          rel="noreferrer"
        >
          Адаптивный сайт
        </a>
        <a
          className="about-me__link about-me__portfolio-link-img"
          href="https://github.com/Murat29/russian-travel"
          target="_blank"
          rel="noreferrer"
        >
          <img src={arrow} alt="Ссылка на работу." />
        </a>
      </div>
      <div className="about-me__portfolio-link-container">
        <a
          className="about-me__link about-me__link_portfolio"
          href="https://github.com/Murat29/react-mesto-api-full"
          target="_blank"
          rel="noreferrer"
        >
          Одностраничное приложение
        </a>
        <a
          className="about-me__link about-me__portfolio-link-img"
          href="https://github.com/Murat29/react-mesto-api-full"
          target="_blank"
          rel="noreferrer"
        >
          <img src={arrow} alt="Ссылка на работу." />
        </a>
      </div>
    </Section>
  );
}

export default AboutMe;
