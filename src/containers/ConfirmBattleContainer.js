import React, { Component } from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

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
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function (players) {
				//console.log('PLAYERS', players);
				this.setState({
					isLoading: false,
					playerInfo: players
				});
			}.bind(this))
			.catch(function (error) {
				console.warn('Error in getPlayersInfo:', error);
			});
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