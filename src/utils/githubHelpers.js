import axios from 'axios';

const access_token = "ACCESS_TOKEN";
const param = `?access_token=${access_token}`;

function getUserInfo(username) {
	return axios.get('https://api.github.com/users/' + username + param);
}

let helpers = {
	getPlayersInfo: function (players) {
		return axios.all(players.map(username => getUserInfo(username)))
			.then((info) => info.map(user => user.data));
	}
}

export default helpers;