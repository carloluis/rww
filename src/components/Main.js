import React from 'react'
import '../main.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

let Main = (props) => {
	return (
		<div>
			<ReactCSSTransitionGroup transitionName='appear' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
				{ React.cloneElement(props.children, {key: props.location.pathname}) }
			</ReactCSSTransitionGroup>
		</div>
	)
};

Main.propTypes = {
	children: React.PropTypes.element,
	location: React.PropTypes.shape({
		pathname: React.PropTypes.string
	})
}

export default Main;