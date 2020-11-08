import React from 'react';
import { tether, Column, Grid, Container } from '@triframe/designer';
import { Ticker } from './ticker/Ticker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const MatchingContainer = styled.div`
	margin: auto;
	padding-top: 30%;
	font-size: 5em;
`;

export const Matching = tether(function* ({ Api, redirect, session }) {
	return (
		<Container>
			<Grid base={7}>
				<Column xs={5}>
					<MatchingContainer>
						<FontAwesomeIcon icon={faCircleNotch} spin />
						&nbsp; matching…
					</MatchingContainer>
				</Column>
				<Column xs={2}>
					<Ticker></Ticker>
				</Column>
			</Grid>
		</Container>
	);
});
