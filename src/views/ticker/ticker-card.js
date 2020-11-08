import React from 'react';
import {
	tether,
	Card,
	Subheading,
	Grid,
	Column,
	Divider,
	Icon,
	Section,
	Paragraph,
} from '@triframe/designer';
import styled from 'styled-components';

const RankImage = styled.img`
    width: 2em;
    height: auto;
    mix-blend-mode: multiply;
    border-radius: 50%;
`;

const TickerCard = tether(function*({ props: { user }, Api: { Rank } }) {
    const rank = yield Rank.read(user.rankId);

    return (
			<Section key={user.id}>
				<Card
					style={{
						backgroundColor: user.isWinner ? '#24b662' : '#cb4e4e',
					}}
				>
					<Grid base={9}>
						<Column
							xs={2}
							style={{
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<RankImage src={require(`../../assets/${rank.image}`)} />
						</Column>
						<Column
							xs={6}
						>
							<Subheading>{user.username}</Subheading>
							<Divider />
							<Paragraph>{rank.title}</Paragraph>
						</Column>
					</Grid>
				</Card>
			</Section>
		);
})

export default TickerCard;
