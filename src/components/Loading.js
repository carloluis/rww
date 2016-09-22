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
		this.originalText = 'Loading';
		this.state = {
			text: this.originalText
		};
	}
	componentDidMount(){
		var stopper = `${this.originalText}...`;
		this.interval = setInterval(()=>{
			if(this.state.text === stopper){
				this.setState({text: this.originalText});
			} else{
				this.setState({
					text: this.state.text + '.'
				});
			}
		}, 300);
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

export default Loading;