import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Modal = (props) => {
  const { id, onClose, children } = props;
  return (
    <div id={id} className="Modal" onKeyPress role="button" tabIndex="0">
      <div className="Container">
        <button type="button" aria-label="Close" className="Close" onClick={onClose} />
        <div className="Content">{children}</div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  id: 'modal',
  onClose: () => {},
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func,
  id: PropTypes.string,
};

export default Modal;
