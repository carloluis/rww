import React from 'react'
import Results from '../components/Results'
import githubHelpers from '../utils/githubHelpers'

class ResultsContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			scores: []
		};
	}
	componentDidMount(){
		githubHelpers.battle(this.props.location.state.playersInfo)
			.then(function (scores) {
				this.setState({
					scores: scores,
					isLoading: false
				});
			}.bind(this))
	}
	render(){
		return (
			<Results {...this.state} playersInfo={this.props.location.state.playersInfo} />
		);
	}
}

ResultsContainer.propTypes = {
	location: React.PropTypes.shape({
		state: React.PropTypes.shape({
			playersInfo: React.PropTypes.array
		})
	})
};

export default ResultsContainer;