import React, { Component } from 'react'
import ConfirmBattle from '../components/ConfirmBattle'

class ConfirmBattleContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			playerInfo: []
		};
		console.log('constructor')
	}
	componentWillMount() {
		console.log('componentWillMount');
	}
	componentDidMount() {
		var query = this.props.location.query;
		// fetch info from github...
		console.log('componentDidMount');
	}
	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps');
	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
	render() {
		return (
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				playerInfo={this.state.playerInfo}
			/>
		);
	}
}

ConfirmBattleContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
};
ConfirmBattleContainer.propTypes = {
	location: React.PropTypes.any
}

export default ConfirmBattleContainer;