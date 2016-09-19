import React from 'react';

let Main = (props) => (
	<div>
		{props.children}
	</div>
);

Main.propTypes = {
	children: React.PropTypes.element
}

export default Main;