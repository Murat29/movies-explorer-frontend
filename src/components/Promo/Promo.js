import React from 'react';
import './Promo.css';
import Section from '../Section/Section';

function Promo() {
  return (
    <Section className="promo" tablet="s" phone="s">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.
      </h1>
    </Section>
  );
}

export default Promo;
