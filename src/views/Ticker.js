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
    Section
} from '@triframe/designer';

export const Ticker = tether(function* ({ Api, redirect }) {

	const { User } = Api

	return (
		<Container>
			<Heading>Players</Heading>
			{/* {User.list.map(user => {    // couldn't get the map working vvv card for each user
                return(
                    <Section>
                        <Card>
                            <Grid base={3}>
                                <Column>
                                    <Heading>user.name</Heading>
                                    <Divider></Divider>
                                    <Subheading>user.rank.title</Subheading>
                                </Column>
                                <Column>
                                    <Avatar.Image />
                                </Column>
                                <Column>
                                    <Icon />
                                </Column>
                            </Grid>
                        </Card>
                    </Section>
                )
            })} */}

			<Section>
				<Card>
					<Grid base={3}>
						<Column>
							<Heading>user.name</Heading>
							<Divider></Divider>
							<Subheading>user.rank.title</Subheading>
						</Column>
						<Column>
							<Avatar.Image />
						</Column>
						<Column>
							<Icon />
						</Column>
					</Grid>
				</Card>
			</Section>
			<Section>
				<Card>
					<Grid base={3}>
						<Column>
							<Heading>user.name</Heading>
							<Divider></Divider>
							<Subheading>user.rank.title</Subheading>
						</Column>
						<Column>
							<Avatar.Image />
						</Column>
						<Column>
							<Icon />
						</Column>
					</Grid>
				</Card>
			</Section>
		</Container>
	);
});
