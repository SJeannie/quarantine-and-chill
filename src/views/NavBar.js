import React from 'react';
import {
	tether,
	Container,
	Appbar,
    BubbleButton,
    Heading,
	Subheading,
	Area
} from '@triframe/designer';

export const NavBar = tether(function* ({ Api, redirect, session }) {
	console.log(session, 'we were here');
	return (
		<Appbar inline>
			<Heading>Evolution/Quarentine and Chill</Heading>
			<Subheading>{'user.name'}</Subheading>
			<BubbleButton
				onPress={async () => {
					session.loggedInUserID = null;

					redirect('/login');
				}}
			>
				Log out
			</BubbleButton>
		</Appbar>
	);
});
