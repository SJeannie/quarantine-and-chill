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

export const Ticker = tether(function* ({ Api, redirect }) {
	const { User, Rank } = Api;

	let users = yield User.list(`
        *,
        rank {
            *
        }
    `);

	console.log(users);

	return (
		<Container>
			<Heading>Players</Heading>
			{users.map(user => {
				return (
					<Section>
						<Card>
							<Grid base={9}>
								<Column xs={4} sm={4} md={4} lg={4} xl={4}>
									<Avatar.Image />
								</Column>
								<Column xs={4} sm={4} md={4} lg={4} xl={4}>
									<Subheading>{user.username}</Subheading>
									<Divider></Divider>
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
