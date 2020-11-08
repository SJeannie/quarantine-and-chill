import React from 'react';
import {
	tether,
	Container,
	Card,
	Area,
	Button,
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

export const Ticker = tether(function* ({ Api }) {
	const { User, Rank } = Api;

	let users = yield User.list(`
        *,
        rank {
            *
        }
    `);

	return (
		<Container>
			<Heading>Players</Heading>
			{users.map(user => {
				return (
					<Section key={user.id} >
						<Card>
							<Grid base={9}>
								<Column xs={4}>
									<Avatar.Image /> 
								</Column>
								<Column xs={4}>
									<Subheading>{user.username}</Subheading>
									<Divider/>
									<Paragraph>{user.rank.title}</Paragraph>
								</Column>
								<Column>
									{user.isWinner ? (
										<Icon name='arrow-up-circle-outline' />
									) : (
										<Icon name='arrow-down-circle' />
									)}
								</Column>
							</Grid>
						</Card>
					</Section>
				);
			})}
		</Container>
	);
});
