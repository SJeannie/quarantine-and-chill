import React from 'react';
import styled from 'styled-components';
import { tether } from '@triframe/designer';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const DelayedLetter = styled.span`
	font-size: 10em;
	position: relative;
	animation: move-text 0.75s forwards;
	opacity: 0;
	animation-delay: ${props => `${0.5 + props.index / 10}s`};
	color: ${props => (props.result === 'LOSS' ? '#4593e3' : '#2ecc71')};

	@keyframes move-text {
		0% {
			bottom: 0.2em;
			opacity: 1;
		}

		100% {
			bottom: 0;
			opacity: 1;
		}
	}
`;

const RankImage = styled.img`
	width: 20em;
	height: auto;
	mix-blend-mode: multiply;
`;

const PlayAgainButton = styled.button`
	border-radius: 0 0 5px 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	border: none;
	background-color: #2ecc71;
	box-shadow: 0 6px #24b662;
	width: 6em;
	height: 1.5em;
	font-size: 4em;
	white-space: nowrap;
	margin-top: 1.25em;

	&:hover {
		box-shadow: 0 4px #24b662;
		top: 2px;
	}
`;

const Results = tether(function* ({props: { result, user }, redirect, Api: { User }}){
    const winner = ['W', 'I', 'N', 'N', 'E', 'R', '!'];
    const loser = ['G', 'A', 'N', 'B', 'A', 'T', 'T', 'E', '!'];

    return (
        <Container>
            <div style={{display: 'flex'}}>
                {result === user.id ? winner.map((letter, i) => <DelayedLetter key={i} index={i}>{letter}</DelayedLetter>) :
                loser.map((letter, i) => <DelayedLetter key={i} index={i} result={'LOSS'}>{letter}</DelayedLetter>)}
            </div>
            <RankImage src={require(`../../assets/${user.rank.image}`)} />
            <PlayAgainButton onClick={async () => {
                    const user = await User.current();
                    await User.findMatching(user.rankId);
                    
                    redirect('/');
				}}>Play Again</PlayAgainButton>
        </Container>
    )
})

export default Results;
