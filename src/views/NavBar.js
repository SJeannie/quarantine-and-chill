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
			<Heading>Evolution/Quarentine and Chill</Heading>
			<Subheading>{'user.name'}</Subheading>
			<BubbleButton
				onPress={async () => {
					redirect('/login');
				}}
			>
				Log out
			</BubbleButton>
		</Appbar>
	);
});
