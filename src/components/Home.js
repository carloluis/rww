import React, { Component } from 'react'

class Home extends Component{
	render(){
		return <h1>{this.props.message}!</h1>
	}
}
Home.propTypes = {
	message: React.PropTypes.string
};
Home.defaultProps = {
	message: 'Welcome Home!'
};

export default Home;