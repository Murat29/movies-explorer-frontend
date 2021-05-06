import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';
function Section({ tablet, phone, className, id, children }) {
  return (
    <section className={`section ${className}`} id={id}>
      <div
        className={`section__container section__container_tablet_${tablet} section__container_phone_${phone}`}
      >
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  tablet: PropTypes.string,
  phone: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
