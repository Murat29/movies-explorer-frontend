import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';
function Section({ tablet, phone, className, children }) {
  return (
    <section className={`section ${className}`}>
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
  children: PropTypes.node,
};

export default Section;
