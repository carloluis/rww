import React from 'react'

let styles = {
	container:{
		position: 'fixed',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		fontSize: 55
	},
	content:{
		textAlign: 'center',
		position: 'absolute',
		width: '100%',
		marginTop: 30
	}
};

class Loading extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			text: this.props.text
		};
	}
	componentDidMount(){
		var stopper = `${this.props.text}...`;
		this.interval = setInterval(()=>{
			if(this.state.text === stopper){
				this.setState({ text: this.props.text });
			} else{
				this.setState({
					text: this.state.text + '.'
				});
			}
		}, this.props.speed);
	}
	componentWillUnmount(){
		clearInterval(this.interval);
	}
	render(){
		return (
			<div style={styles.container}>
				<p style={styles.content}>{this.state.text}</p>
			</div>
		)
	}
}

Loading.propTypes = {
	text: React.PropTypes.string,
	speed: React.PropTypes.number
}
Loading.defaultProps = {
	text: 'Loading',
	speed: 300
}

export default Loading;