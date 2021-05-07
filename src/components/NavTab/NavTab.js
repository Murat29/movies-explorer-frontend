import React from 'react';
import ApplicationLink from '../../components/ApplicationLink/ApplicationLink';
import Section from '../Section/Section';
import './NavTab.css';
function NavTab() {
  return (
    <Section className="nav-tab" tablet="m" phone="l">
      <div className="nav-tab__container">
        <ApplicationLink className="nav-tab__link" to="#about-project">
          О проекте
        </ApplicationLink>
        <ApplicationLink className="nav-tab__link" to="#techs">
          Технологии
        </ApplicationLink>
        <ApplicationLink className="nav-tab__link" to="#about-me">
          Студент
        </ApplicationLink>
      </div>
    </Section>
  );
}

export default NavTab;
