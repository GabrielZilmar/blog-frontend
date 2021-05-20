import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = (props) => {
  const { children, color, title } = props;

  return (
    <div className="Card" style={{ borderColor: color || '#282c6b' }}>
      <div
        className="Header"
        style={{ backgroundColor: color || '#282c6b' }}
      >
        {title}
      </div>
      <div className="Content">{children}</div>

    </div>
  );
};

Card.defaultProps = {
  color: undefined,
};

Card.propTypes = {
  children: PropTypes.element.isRequired,
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Card;
