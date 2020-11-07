import React from 'react'
import { Provider, Route, tether } from '@triframe/designer'
//import { Chat } from './views/Chat'
import { Login } from './views/Login';
import { Matching } from './views/Matching'
import { NavBar } from './views/NavBar'
import { Ticker } from './views/Ticker'

export default () => (
	<Provider url={process.env.REACT_APP_BACKEND_URL}>
		<Route exact path='/login' component={Login} />
		<Route exact path='/' component={Matching} />
	</Provider>
);