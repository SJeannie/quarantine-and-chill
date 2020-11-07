import React from 'react';
import {
	tether,
	Container,
	Heading,
	TextInput,
	Button,
} from '@triframe/designer';

export const Login = tether(function* ({Api, redirect, session}) {

    const { User } = Api
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
                    let user = await User.create({name: form.username});
                    // User.setSession(user.id)
                    redirect('/')
				}}
			>
				Evolve
			</Button>
		</Container>
	);
});