import React from 'react'

let puke = (object) => <pre>{JSON.stringify(object, null, ' ')}</pre>

let Results = (props) => {
	return (
		<div> Results: {puke(props)} </div>
	);
};

Results.propTypes = {
	isLoading: React.PropTypes.bool.isRequired,
	playersInfo: React.PropTypes.array.isRequired,
	scores: React.PropTypes.array.isRequired
}

export default Results;