import axios from 'axios';

const access_token = "ACCESS_TOKEN";
const param = `?access_token=${access_token}`;

function getUserInfo(username) {
	return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username) {
	//fetch username repos
	return axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`);
}

function getTotalStars(repos) {
	// calculate all the stars that the user has
	return repos.data.reduce((prev, current) => prev + current.stargazers_count, 0);
}

function getPlayersData(player) {
	console.log('getPlayersData.player:',player);
	return getRepos(player.login)
		.then(getTotalStars)
		.then((totalStars) => ({ 
			followers: player.followers,
			totalStars: totalStars,
			repos: player.public_repos
		}));
}

function calculateScores(players) {
	return [
		players[0].followers*3 + players[0].totalStars + players[0].repos,
		players[1].followers*3 + players[1].totalStars + players[1].repos
	];
}

let helpers = {
	getPlayersInfo: function (players) {
		return axios.all(players.map(username => getUserInfo(username)))
			.then((info) => info.map(user => user.data));
	},
	battle: function (players) {
		let playerOneData = getPlayersData(players[0]);
		let playerTwoData = getPlayersData(players[1]);

		return axios.all([playerOneData, playerTwoData])
			.then(calculateScores)
			.catch( error => {
				console.warn('Error in getPlayersInfo:', error);
			});
	}
}

export default helpers;