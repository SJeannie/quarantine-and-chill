import React from 'react';
import {
	tether,
	Container,
	Heading,
	TextInput,
} from '@triframe/designer';
import evolution_word from '../../assets/evolution_word.jpg';
import evolution from '../../assets/evolution.jpg';

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
			<img src={evolution_word}/>
			<button style={{
                    backgroundColor: '#24B662',
                    height: '5em',
                    borderRadius: '0px 0px 10px 10px',
                }}
				onPress={async () => {
					let user = await User.login(form.username);

					await User.findMatching(user.rankId);

					redirect('/');
				}}
			>
				Log in
			</button>
			<img src={evolution}/>
		</Container>
	);
});
