import React from 'react';
import PropTypes from 'prop-types';

const PopupWrap = ({ children, small, isActive, handleClose }) =>(
	<div className={["popup-wrapper", isActive && "popup-wrapper-active"].join(' ')}>
    <div className="popup-wrapper-close" onClick={handleClose} />
    <div className={["popup-wrapper-row", small && "popup-wrapper-row-small"].join(' ')}>
      {children}
    </div>
  </div>
);

PopupWrap.propTypes = {
	children: PropTypes.node,
	small: PropTypes.bool,
	isActive: PropTypes.bool,
	handleClose: PropTypes.func
}

export default PopupWrap;