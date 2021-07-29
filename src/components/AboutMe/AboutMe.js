import React from 'react';
import Section from '../Section/Section';
import Title from '../Title/Title';
import avatar from '../../images/avatar.jpg';
import arrow from '../../images/arrow.svg';
import './AboutMe.css';
function AboutMe() {
  return (
    <Section className="about-me" id="about-me" tablet="m" phone="m">
      <Title>Студент</Title>
      <div className="about-me__description">
        <div className="about-me__text-container">
          <p className="about-me__name">Мурат</p>
          <p className="about-me__job">Фронтенд-разработчик, 24 года</p>
          <p className="about-me__about">
            Меня всегда тянуло к программированию. Летом 2020 моя тяга
            пересилила страх, и я записался на курс от Яндекс.Практикума. Там я
            понял что фронтенд- это очень интересно и увлекательно. Приятно
            ощущать себя &quot;творцом&quot;. Держу руку на пульсе фронтенда -
            слушаю подкаст &quot;Веб-стандарты&quot;. Смотрю ютуб-канал
            Владилена Минина. В данный момент читаю серию книг &quot;Вы не
            знаете JS&quot;. Люблю решать задачки на codewars. Цель - начать
            карьеру junior-разработчика и через 2 года стать крепким
            middle-разработчиком.
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
