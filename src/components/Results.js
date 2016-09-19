import React from 'react'
import UserDetails from '../components/UserDetails'
import UserDetailsWrapper from '../components/UserDetailsWrapper'
import {Link} from 'react-router'
import styles from '../styles/index'

let puke = (object) => <pre>{JSON.stringify(object, null, ' ')}</pre>

let StartOver = () => (
	<div className='col-sm-12' style={styles.space}>
		<Link to='/playerOne'>
			<button type='button' className='btn btn-lg btn-danger'>Start Over</button>
		</Link>
	</div>
);

let Results = (props) => {
	if(props.isLoading){
		return (<p> LOADING... </p>);
	}

	if(props.scores[0] === props.scores[1]){
		return (
			<div className='jumbotron col-sm-12 text-center'>
				<h1>It's a tie!</h1>
				<StartOver />
			</div>
		);
	}

	let [winningIndex, losingIndex] = props.scores[0] > props.scores[1]? [0, 1]: [1, 0];
	return (
		<div className='jumbotron col-sm-12 text-center'>
			<h1>Results</h1>
			<div className='col-sm-8 col-sm-offset-2'>
				<UserDetailsWrapper header='Winner'>
					<UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
				</UserDetailsWrapper>
				<UserDetailsWrapper header='Looser'>
					<UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
				</UserDetailsWrapper>
			</div>
			<StartOver />
		</div>
	);
};

Results.propTypes = {
	isLoading: React.PropTypes.bool.isRequired,
	playersInfo: React.PropTypes.array.isRequired,
	scores: React.PropTypes.array.isRequired
}

export default Results;