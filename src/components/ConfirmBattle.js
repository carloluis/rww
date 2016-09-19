import React from 'react';
import {Link} from 'react-router';
import styles from '../styles/index';
import UserDetails from '../components/UserDetails';
import UserDetailsWrapper from '../components/UserDetailsWrapper';

let puke = (object) => <pre>{JSON.stringify(object, null, ' ')}</pre>

let ConfirmBattle = (props) => {
	return props.isLoading === true
		? <p> LOADING! </p>
		: <div className="jumbotron col-sm-12 text-center">
			<h1>Cofirm Players</h1>
			<div className="col-sm-8 col-sm-offset-2">
				<UserDetailsWrapper header='Player One'>
					<UserDetails info={props.playersInfo[0]} />
				</UserDetailsWrapper>
				<UserDetailsWrapper header='Player Two'>
					<UserDetails info={props.playersInfo[1]} />
				</UserDetailsWrapper>
			</div>
			<div className="col-sm-8 col-sm-offset-2">
				<div className="col-sm-12" style={styles.space}>
					<button className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
						Initiate Battle!
					</button>
				</div>
				<div className="col-sm-12" style={styles.space}>
					<Link to="/playerOne" >
						<button className="btn btn-lg btn-danger">Reselect Players</button>
					</Link>
				</div>
			</div>
		</div>;
};

ConfirmBattle.propTypes = {
	isLoading: React.PropTypes.bool.isRequired,
	onInitiateBattle: React.PropTypes.func.isRequired,
	playersInfo: React.PropTypes.array.isRequired
};

export default ConfirmBattle