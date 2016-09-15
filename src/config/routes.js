import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import Prompt from '../components/Prompt'

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home}/>
			<Route path='playerOne' header='Player One...' component={Prompt} />
			<Route path='playerTwo/:playerOne' header='Player Two...' component={Prompt} />
		</Route>
	</Router>
);

export default routes;