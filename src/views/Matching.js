import React from 'react';
import {
	tether,
	Container,
    Heading,
	Area,
	Column,
	Grid
} from '@triframe/designer';
import { NavBar } from './NavBar'
import { Ticker } from './Ticker';
import { Chat } from './Chat';

export const Matching = tether(function* ({ Api, redirect, session }) {

    // let userID = session.loggedInUserID     // get user id from session

	return (
		<Container>
			<NavBar />
			<Grid base={3}>
				<Column sm>
					<Ticker />
				</Column>
			</Grid>
		</Container>
	);
});
