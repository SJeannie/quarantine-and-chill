import React from 'react';
import {
	tether,
	Container,
	Card,
	Heading,
	Subheading,
	Grid,
	Column,
	Divider,
	Avatar,
	Icon,
	Section,
	Paragraph,
} from '@triframe/designer';
import TickerCard from './ticker-card';

export const Ticker = tether(function* ({ Api }) {
	const { User } = Api;

	let users = yield User.list(`
        *,
        rank {
            *
        }
	`);

	return (
		<Container>
			<Heading>Players</Heading>
			{users.sort((a, b) => b.rank.position - a.rank.position).map(user => <TickerCard key={user.id} user={user} />)}
		</Container>
	);
});
