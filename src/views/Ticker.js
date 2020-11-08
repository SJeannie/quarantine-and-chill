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
				let trendColor = user.isWinner ? '#24b662' : '#cb4e4e'
				return (
					<Section key={user.id} >
						<Card style={{backgroundColor: trendColor}}>
							<Grid base={9}>
								<Column xs={3} style={{alignItems: 'center', justifyContent: 'center'}}>
									<RankImage src={require(`../assets/${user.rank.image}`)} /> 
								</Column>
								<Column xs={6}>
									<Subheading>{user.username}</Subheading>
									<Divider/>
									<Paragraph>{user.rank.title}</Paragraph>
								</Column>
							</Grid>
						</Card>
					</Section>
				);
			})}
		</Container>
	);
});
