import React from 'react'
import { Provider, Route, tether } from '@triframe/designer'
//import { Chat } from './views/Chat'
import { Login } from './views/Login';
import { Matching } from './views/Matching'
import { NavBar } from './views/NavBar'
import { Ticker } from './views/Ticker'

const UserDetails = tether(function* ({ Api }) {
	const { User } = Api
	const [ user ] = yield User.list(`
	name,
	pets {
	name
	}
	`)
	return (
			<div>
					<h1>{user.name}</h1>
					<ul>
							{user.pets.map(pet => (
									<li>
											<span>{pet.name} </span>
											<button onClick={() => pet.delete()}>Delete</button>
									</li>
							))}
					</ul>
			</div>
	)
})

export default () => (
	<Provider url={process.env.REACT_APP_BACKEND_URL}>
		<Route exact path='/login' component={Login} />
		<Route exact path='/' component={Matching} />
	</Provider>
);