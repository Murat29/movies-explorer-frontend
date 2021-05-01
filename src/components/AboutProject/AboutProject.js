import React from 'react';
import './AboutProject.css';
import Title from '../Title/Title';
function AboutProject() {
  return (
    <section className="about-project">
      <Title>О проекте</Title>
      <div className="about-project__description-list">
        <div className="about-project__description-item">
          <p className="about-project__description-title">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__description-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__description-item">
          <p className="about-project__description-title">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__description-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__strip">
        <div className="about-project__strip-item about-project__strip-item_m">
          <p className="about-project__strip-text about-project__strip-text_background_green">
            1 неделя
          </p>
          <p className="about-project__strip-text about-project__strip-text_color_grey">
            Back-end
          </p>
        </div>
        <div className="about-project__strip-item about-project__strip-item_l">
          <p className="about-project__strip-text about-project__strip-text_background_grey">
            4 недели
          </p>
          <p className="about-project__strip-text about-project__strip-text_color_grey">
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
