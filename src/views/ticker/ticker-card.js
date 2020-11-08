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
    console.log(rank.id);
    return (
        <Section key={user.id} >
            <Card>
                <Grid base={9}>
                    <Column xs={4}>
                        <RankImage src={require(`../../assets/${rank.image}`)} /> 
                    </Column>
                    <Column xs={4}>
                        <Subheading>{user.username}</Subheading>
                        <Divider/>
                        <Paragraph>{rank.title}</Paragraph>
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
    )
})

export default TickerCard;
