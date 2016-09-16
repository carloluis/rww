import React from 'react';

class Main extends React.Component{
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
Main.propTypes = {
	children: React.PropTypes.element
}

export default Main;