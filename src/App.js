import React from 'react'
import { Provider, Route } from '@triframe/designer'
import { Chat } from './views/Chat'
import { Login } from './views/Login';
import { Matching } from './views/Matching'

export default () => (
	<Provider url={process.env.REACT_APP_BACKEND_URL}>
		<Route exact path='/login' component={Login} />
		<Route exact path='/' component={Matching} />
	</Provider>
);