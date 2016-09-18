import React from 'react';

let ConfirmBattle = (props) => {
	return props.isLoading === true
		? <p> LOADING! </p>
		: <p> CONFIRM BATTLE! </p>;
};

ConfirmBattle.propTypes = {
	isLoading: React.PropTypes.bool.isRequired,
	playerInfo: React.PropTypes.array.isRequired
};

export default ConfirmBattle