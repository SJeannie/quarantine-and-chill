import React from 'react';
import {
	tether,
	Column,
	Grid
} from '@triframe/designer';
import { Ticker } from './Ticker';

export const Matching = tether(function* ({ Api, redirect, session }) {
	return (
		<Grid base={3}>
			<Column sm>
				<Ticker />
			</Column>
		</Grid>
	);
});
