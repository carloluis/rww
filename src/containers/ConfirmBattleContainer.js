import React, { Component } from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

class ConfirmBattleContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			playersInfo: []
		};
		
		this.handleInitiateBattle = this.handleInitiateBattle.bind(this);
	}
	componentDidMount() {
		var query = this.props.location.query;
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function (players) {
				this.setState({
					isLoading: false,
					playersInfo: [players[0], players[1]]
				});
			}.bind(this))
			.catch(function (error) {
				console.warn('Error in getPlayersInfo:', error);
			});
	}
	handleInitiateBattle(){
		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo: this.state.playerInfo
			}
		})
	}
	render() {
		return (
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				onInitiateBattle={this.handleInitiateBattle}
				playersInfo={this.state.playersInfo}
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