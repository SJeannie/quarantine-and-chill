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
import styled from 'styled-components';

export const Ticker = tether(function* ({ Api }) {
	const { User } = Api;

	let users = yield User.list(`
        *,
        rank {
            *
        }
	`);
	
	const RankImage = styled.img`
		width: 2em;
		height: auto;
		mix-blend-mode: multiply;
		border-radius: 50%;
	`;

	return (
		<Container>
			<Heading>Players</Heading>
			{users.map(user => {
				return (
					<Section key={user.id} >
						<Card>
							<Grid base={9}>
								<Column xs={4}>
									<RankImage src={require(`../assets/${user.rank.image}`)} /> 
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
