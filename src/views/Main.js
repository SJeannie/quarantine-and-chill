import React from 'react';
import { tether, Column, Grid, Container } from '@triframe/designer';
import { Ticker } from './ticker/Ticker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Evolution from './evolution';

const MatchingContainer = styled.div`
	margin: auto;
	padding-top: 30%;
	font-size: 5em;
`;

export const Main = tether(function* ({ Api, redirect }) {
	let { User } = Api;
	let user = yield User.current(`*, rank {*}, round {result, isFull, timeRemaining}`);

	if (user) {
		return (
			<Container>
				<Grid base={7}>
					<Column xs={5}>
						{user.round && user.round.isFull ? (
							<Evolution user={user}></Evolution>
						) : (
							<MatchingContainer>
								<FontAwesomeIcon icon={faCircleNotch} spin />
								&nbsp; matching…
							</MatchingContainer>
						)}
					</Column>
					<Column xs={2}>
						<Ticker />
					</Column>
				</Grid>
			</Container>
		);
	} else {
		redirect('/login');
	}
});
