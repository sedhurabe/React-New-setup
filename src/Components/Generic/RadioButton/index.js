import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({ type, id, defaultValue, onChange, label, name, block }) => (
 <div className={['radioRow', block && 'd-inline-block'].join(' ')}>
    <label htmlFor={id}>
      <input type={type} id={id} name={name} defaultValue={defaultValue} onChange={onChange} />
      <span className={type}>{label}</span>
    </label>
  </div>  
); 
  
RadioButton.proptypes = {
  type: PropTypes.any,
  id: PropTypes.string.isRequired,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  block: PropTypes.bool
}  

export default RadioButton;