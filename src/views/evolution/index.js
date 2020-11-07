import React from 'react';
import { tether } from '@triframe/designer/dist/Provider';
import {
	tether,
} from '@triframe/designer';

const Evolution = tether(function*({ Api }){
    const rockPaperScissors = (userOneChoice, userTwoChoice) => {
        const choiceMap = {
            rock: {
                rock: 'TIE',
                paper: 'LOSS',
                scissors: 'WIN'
            },
            paper: {
                rock: 'WIN',
                paper: 'TIE',
                scissors: 'LOSS'
            },
            scissors: {
                rock: 'LOSS',
                paper: 'WIN',
                scissors: 'TIE'
            },
        };

        return choiceMap[userOneChoice][userTwoChoice];
    }

    return <div />;
})

export default Evolution;
