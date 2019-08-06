import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class TextArea extends Component {
  render(){
    const { name, id, value, placeholder, onChange } = this.props;
    return(
      <div className="inputRow">
        <textarea 
        	name={name} 
        	id={id} 
        	value={value} 
        	placeholder={placeholder} 
        	onChange={onChange} 
        	className="inputBox inputBox-TextArea"
        />
      </div>
    );
  }
}

TextArea.proptypes = {
	name: PropTypes.string,
	id: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
}

export default TextArea;