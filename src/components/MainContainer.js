import React from 'react'
import styles from '../styles/index'

let MainContainer = (props) => {
	return (
		<div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
			{props.children}
		</div>
	);
};

MainContainer.propTypes = {
	children: React.PropTypes.any
}

export default MainContainer;