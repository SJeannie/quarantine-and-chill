import React from 'react';
import {
	tether,
	Container,
	Heading,
	TextInput,
	Button,
} from '@triframe/designer';

export const Login = tether(function* ({ Api, redirect, session }) {
	const { User } = Api;

	let user = yield User.current(`*, rank {*}, round {*}`);

	const form = yield {
		username: '',
	};


	return (
		<Container>
			<Heading>Login</Heading>
			<TextInput
				label='Username'
				value={form.username}
				onChange={value => (form.username = value)}
			/>
			<Button
				onPress={async () => {
					let user = await User.login(form.username);

					if (!user.roundId) {
						await User.findMatching(user.rankId);
					}

					redirect('/');
				}}
			>
				Log in
			</Button>
		</Container>
	);
});
