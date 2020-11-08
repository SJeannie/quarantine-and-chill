import React from 'react';
import {
	tether,
	Column,
	Grid,
	Container
} from '@triframe/designer';
import { Ticker } from './Ticker';
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
					<MatchingContainer>
						<FontAwesomeIcon icon={faCircleNotch} spin />
						&nbsp; matching…
					</MatchingContainer>
		</Container>
	);
});
