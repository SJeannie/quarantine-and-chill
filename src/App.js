import React from 'react'
import { Provider, Route, tether, Container } from '@triframe/designer'
//import { Chat } from './views/Chat'
import { Login } from './views/Login';
import { Main } from './views/Main'
import { NavBar } from './views/NavBar'
import GlobalStyle from './theme';

export default () => (
	<Provider url={process.env.REACT_APP_BACKEND_URL}>
		<GlobalStyle />
		<Container>
			<NavBar />
			<Route exact path='/login' component={Login} />
			<Route exact path='/' component={Main} />
		</Container>
	</Provider>
);