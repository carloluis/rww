import React from 'react';

let puke = (object) => <pre>{JSON.stringify(object, null, ' ')}</pre>

let ConfirmBattle = (props) => {
	return props.isLoading === true
		? <p> LOADING! </p>
		: <div> CONFIRM BATTLE!: {puke(props)}</div>;
};

ConfirmBattle.propTypes = {
	isLoading: React.PropTypes.bool.isRequired,
	playerInfo: React.PropTypes.array.isRequired
};

export default ConfirmBattle