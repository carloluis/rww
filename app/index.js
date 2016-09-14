import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Hello extends Component{
	render(){
		return <h1>{this.props.message}</h1>
	}
}
Hello.propTypes = {
	message: React.PropTypes.string
};
Hello.defaultProps = {
	message: 'Hello World!'
};

ReactDOM.render(
	<Hello message="Hello RWW" />, 
	document.getElementById('root')
);

export default Hello;