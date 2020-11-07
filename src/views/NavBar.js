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

export const NavBar = tether(function* ({ Api: { User }, redirect }) {
	const user = yield User.current();
	
	return (
		<Appbar inline>
			<Heading>Quarantine and Chill</Heading>
			<Subheading>{user.username}</Subheading>
			<BubbleButton
				onPress={async () => {
					await User.logout();

					redirect('/login');
				}}
			>
				Log out
			</BubbleButton>
		</Appbar>
	);
});
