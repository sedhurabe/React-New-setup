import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = props => (
	<div className={['errorWrap', props.type === 'error'? 'errorWrap-red': 'errorWrap-green'].join(' ')}>
		{props.message}
	</div>
);

ErrorMessage.propTypes = {
	type: PropTypes.bool,
	message: PropTypes.node
}

export default ErrorMessage;