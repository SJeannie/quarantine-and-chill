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

    const { User } = Api
    // const user = User.read(session.loggedInUserID)

	return (
		<Appbar inline>
			<Heading>Evolution/Quarentine and Chill</Heading>
			<Subheading>{'user.name'}</Subheading>
			<BubbleButton
				onPress={async () => {
					// await user.delete(session.loggedInUserID);
					// session.loggedInUserID
					redirect('/login');
				}}
			>
				Leave
			</BubbleButton>
		</Appbar>
	);
});
