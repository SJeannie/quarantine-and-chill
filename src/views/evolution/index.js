import React from 'react';
import {
	tether,
} from '@triframe/designer';
import styled from 'styled-components';
import Results from './results';
import rock from '../../assets/rock.jpg';
import paper from '../../assets/paper.jpg';
import scissors from '../../assets/scissors.jpg';
import hand from '../../assets/hand.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HandsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 10%;
    width: 100%;
`;

const LeftHand = styled.img`
    width: 25em;
    height: auto;
    animation: shake 2s linear infinite; 
    mix-blend-mode: multiply;

    @keyframes shake {
        0%   { transform: rotate(0deg);  }
        50%   { transform: rotate(90deg);  }
        100% { transform: rotate(0deg);    }
    }
`;

const RightHand = styled.img`
    width: 25em;
    height: auto;
    animation: shakeRight 2s linear infinite; 
    mix-blend-mode: multiply;

    @keyframes shakeRight {
        0%   { transform: scaleX(-1) rotate(0deg);  }
        50%   { transform: scaleX(-1) rotate(90deg);  }
        100% { transform: scaleX(-1) rotate(0deg);    }
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%
`;

const Button = styled.button`
    border-radius: 0 0 5px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: none;
    background-color: ${(props) => {
        if (props.color === 'green') {
            return '#2ecc71';
        }

        if (props.color === 'blue') {
            return '#4593e3';
        }

        return '#cb4e4e';
    }};
    box-shadow: 0 6px ${props => {
        if (props.color === 'green') {
            return '#24b662';
        }

        if (props.color === 'blue') {
            return '#226fbe';
        }

        return '#ab3c3c'
    }};
    width: 10em;
    height: 10em;

    &:hover {
        box-shadow: 0 4px ${props => {
            if (props.color === 'green') {
                return '#24b662';
            }

            if (props.color === 'blue') {
                return '#226fbe';
            }

            return '#ab3c3c'
        }};
        top: 2px;
    }

    &:not(last-child) {
        margin-right: 1em;
    }
`;

const ButtonImage = styled.img`
    width: 75%;
    height auto;
    mix-blend-mode: multiply;
`;

const NumberDisplay = styled.div`
    font-weight: 1000;
    font-size: 10em;
`;

const Evolution = tether(function*({ props: { user }, Api }){ 
    const round = yield Api.Round.read(user.round.id);

    return (
        round.result ? <Results result={round.result} user={user} /> : (
        <Container>
            <NumberDisplay>{round.timeRemaining}</NumberDisplay>
            <HandsWrapper>
                <LeftHand src={hand} alt='left hand' />
                <RightHand src={hand} alt='right hand' />
            </HandsWrapper>
            <ButtonWrapper>
                <Button onClick={() => {
                    user.makeChoice('rock');
                }} disabled={user.choice !== null}>
                    <ButtonImage src={rock}/>
                </Button>
                <Button color='green' onClick={() => {
                    user.makeChoice('paper')
                }} disabled={user.choice !== null}>
                    <ButtonImage src={paper}/>
                </Button>
                <Button color='blue' onClick={() => {
                    user.makeChoice('scissors')
                }} disabled={user.choice !== null}>
                    <ButtonImage src={scissors}/>
                </Button>
            </ButtonWrapper>
        </Container>
    ));
})

export default Evolution;
