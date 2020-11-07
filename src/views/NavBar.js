import React from 'react';
import {
	tether,
	Appbar,
    Heading,
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
	margin-top: ${props => props.userExists ? '1em' : '0'};
`;

export const NavBar = tether(function* ({ Api: { User }, redirect }) {
	const user = yield User.current();
	
	return (
		<Appbar inline>
			<HeaderContainer userExists={!!user}>
				<Heading>Quarantine and Chill</Heading>
				{user && <em style={{paddingBottom: '1.25em'}}>Hey {user.username}!</em>}
			</HeaderContainer>
			{user && (
					<SignOutButton
						onClick={async () => {
						await User.logout();

						redirect('/login');
						}}
					>
						<FontAwesomeIcon icon={faSignOutAlt} />
					</SignOutButton>
			)}
		</Appbar>
	);
});
