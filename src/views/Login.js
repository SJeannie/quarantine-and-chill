import React from 'react';
import {
	tether,
	Container,
	Heading,
	TextInput,
	Grid,
	Column,
} from '@triframe/designer';
import evolution_word from '../assets/evolution_word.png';
import evolution from '../assets/evolution.jpg';

export const Login = tether(function* ({ Api, redirect, session }) {
	const { User } = Api;

	let user = yield User.current(`*, rank {*}, round {*}`);

	const form = yield {
		username: '',
	};

	return (
		<Container>
				<Grid base={1}>
				<Column style={{
										alignItems: 'center',
										justifyContent: 'center',
                }}><img src={evolution_word} style={{
										width: '40em',
										borderRadius: '0px 0px 10px 10px',
										padding: '10px',
                }}/></Column></Grid>
			<Heading>Login</Heading>
			<TextInput
				label='Username'
				value={form.username}
				onChange={value => (form.username = value)}
			/>
			<button style={{
                    backgroundColor: '#24B662',
                    height: '5em',
                    borderRadius: '0px 0px 10px 10px',
                }}
				onClick={async () => {
					let user = await User.login(form.username);

					await User.findMatching(user.rankId);

					redirect('/');
				}}
			>
				Log in
			</button>
			<Grid base={1}>
				<Column style={{
										alignItems: 'center',
										justifyContent: 'center',
                }}><img src={evolution} style={{
                    backgroundColor: '#24B662',
										// height: '30em',
										width: '60em',
										borderRadius: '0px 0px 10px 10px',
										alignItems: 'center',
										justifyContent: 'center',
                }}/></Column>
								</Grid>
		</Container>
	);
});
