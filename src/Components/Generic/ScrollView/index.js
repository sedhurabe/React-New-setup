import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

const ScrollView = ({onScroll, children}) =>(
	<div className="scrollViwer">
		<Scrollbars style={{ height: "calc(100vH - 165px)" }} onScroll={onScroll}>
			{children}
		</Scrollbars>
	</div>
)

ScrollView.proptypes = {
	onScroll: PropTypes.func,
	children: PropTypes.node
}

export default ScrollView;