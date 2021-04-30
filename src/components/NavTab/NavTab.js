import React from 'react';
import ApplicationLink from '../../components/ApplicationLink/ApplicationLink';
import './NavTab.css';
function NavTab() {
  return (
    <section className="nav-tab">
      <ApplicationLink className="nav-tab__link" to="#">
        О проекте
      </ApplicationLink>
      <ApplicationLink className="nav-tab__link" to="#">
        Технологии
      </ApplicationLink>
      <ApplicationLink className="nav-tab__link" to="#">
        Студент
      </ApplicationLink>
    </section>
  );
}

export default NavTab;
