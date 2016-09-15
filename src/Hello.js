import React, { Component } from 'react'

class Hello extends Component{
	render(){
		return <h1>{this.props.message}!</h1>
	}
}
Hello.propTypes = {
	message: React.PropTypes.string
};
Hello.defaultProps = {
	message: 'Hello World!'
};

export default Hello;