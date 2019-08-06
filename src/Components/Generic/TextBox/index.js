import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextBox extends Component {
  render(){
    const { type, name, id, value, placeholder, onChange } = this.props;
    return(
      <div className="inputRow">
        <input 
        	className="inputBox inputBox-TextBox"
        	id={id} 
        	name={name} 
        	type={type} 
        	value={value} 
        	onChange={onChange}
        	placeholder={placeholder} 
        />
      </div>
    );
  }
}

TextBox.proptypes = {
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}

export default TextBox;