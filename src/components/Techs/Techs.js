import React from 'react';
import Section from '../Section/Section';
import Title from '../Title/Title';
import './Techs.css';
function Techs() {
  return (
    <Section className="techs" tablet="m" phone="l">
      <div className="techs__container">
        <Title>Технологии</Title>
        <p className="techs__title">7 технологий</p>
        <p className="techs__sub-title">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__techs">
          <li className="techs__tech">HTML</li>
          <li className="techs__tech">CSS</li>
          <li className="techs__tech">JS</li>
          <li className="techs__tech">React</li>
          <li className="techs__tech">Git</li>
          <li className="techs__tech">Express.js</li>
          <li className="techs__tech">mongoDB</li>
        </ul>
      </div>
    </Section>
  );
}

export default Techs;
