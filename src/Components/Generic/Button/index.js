import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id, label, isLoading, full, onClick, isDisabled, secondary }) => (
  <div className={['buttonRow', secondary && 'buttonRow-secondary', full && 'buttonRow-Full', isDisabled && 'buttonRow-disabled' ].join(' ')}>
    {isLoading && <div className="loaderRow">
      <div className="loader" />
    </div>}
    <button type="submit" id={id} className="button" onClick={onClick} disabled={isDisabled}>
    {label}
    </button>
  </div>
);

Button.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  full: PropTypes.bool,
  handleSubmit: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default Button;