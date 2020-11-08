import React from 'react';
import {
	tether,
	Container,
	Heading,
	Subheading,
	Grid,
	Column,
} from '@triframe/designer';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const SignOutButton = styled.button`
	border-radius: 3px;
	background-color: #cb4e4e;
	color: white;
	margin-left: auto;
	margin-right: 1em;
	border: none;
	box-shadow: -3px 0 #ab3c3c;

	&:hover {
		box-shadow: -2px 0 #ab3c3c;
		left: -1px;
	}
`;

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: 'center';
	background-color: #226fbe;
`;

export const NavBar = tether(function* ({ Api: { User }, redirect }) {
	const user = yield User.current();

	return (
		<container
			inline
			style={{
				marginTop: '10px',
				backgroundColor: '#226fbe',
				alignItems: 'center',
				borderRadius: '8px',
				padding: '3px',
			}}
		>
			<Grid base={9}>
				<Column xs={8}>
					<HeaderContainer userExists={!!user}>
						<Heading>Quarantine and Chill: Evolution</Heading>
						{user && <Subheading>Hey {user.username}!!!</Subheading>}
					</HeaderContainer>
				</Column>

				{user && (
					<Column>
						<SignOutButton
							onClick={async () => {
								await User.logout();

								redirect('/login');
							}}
						>
							{'Logout   '}
							<FontAwesomeIcon icon={faSignOutAlt} />
						</SignOutButton>
					</Column>
				)}
			</Grid>
		</container>
	);
});
