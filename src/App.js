import React from 'react'
import { Provider, Route, tether, Container } from '@triframe/designer'
//import { Chat } from './views/Chat'
import { Login } from './views/Login';
import { Matching } from './views/Matching'
import { NavBar } from './views/NavBar'
import { Ticker } from './views/Ticker'
import GlobalStyle from './theme';
import Evolution from './views/evolution';

export default () => (
	<Provider url={process.env.REACT_APP_BACKEND_URL}>
		<GlobalStyle />
		<Container>
			<NavBar />
			<Route exact path='/login' component={Login} />
			<Route exact path='/' component={Matching} />
			<Route exact path='/evolution' component={Evolution} />
		</Container>
	</Provider>
);