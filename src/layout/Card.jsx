import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = (props) => {
  const { children, color, titulo } = props;

  return (
    <div className="Card" style={{ borderColor: color || '#000' }}>
      <div
        className="Header"
        style={{ backgroundColor: color || '#000' }}
      >
        {titulo}
      </div>
      <div className="Contudo">{children}</div>

    </div>
  );
};

Card.defaultProps = {
  color: undefined,
};

Card.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  titulo: PropTypes.string.isRequired,
};

export default Card;
