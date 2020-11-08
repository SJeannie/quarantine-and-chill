import {
	Model,
	boolean,
	include,
	hasMany,
	hasOne,
	belongsTo,
	string,
	integer,
} from '@triframe/scribe';
import { Resource } from '@triframe/core';
import { sleep } from '@triframe/confectioner';
import { User } from './User';

export class Round extends Resource {
    @include(Model)
    
	@integer
	result = null;

	@boolean
	isFull = false;

	@integer
	timeRemaining = 5;

	@hasMany({ as: 'round' })
	users = [];

	@belongsTo({ a: 'Rank' })
	rank = null;

	async checkResults() {
		const [userA, userB] = await User.where({ roundId: this.id });

		const result = {
			rock: {
				rock: null,
				paper: userB,
				scissors: userA,
			},
			paper: {
				rock: userA,
				paper: null,
				scissors: userB,
			},
			scissors: {
				rock: userB,
				paper: userA,
				scissors: null,
			},
		}[userA.choice][userB.choice];

		if (result) {
            await (result.id === userA.id ? userA.promote() : userA.demote());
            await (result.id === userB.id ? userB.promote() : userB.demote());

			this.result = result.id;
		}

		if (result === null) {
			userA.choice = null;
			userB.choice = null;

			this.runTimer();
		}
	}

	async runTimer() {
		this.timeRemaining = 5;

		while (this.timeRemaining > 0) {
			await sleep(1000);
			this.timeRemaining--;
		}

		const users = await User.where({ roundId: this.id });

		const madeAChoice = user => user.choice;

		if (!users.every(madeAChoice) && users.some(madeAChoice)) {
            const decisionMaker = users.find(user => user.choice);
            const nonDecisionMaker = users.find(user => !user.choice);

            await decisionMaker.promote();
            await nonDecisionMaker.demote();

			this.result = decisionMaker.id;
		}

		if (!users.some(madeAChoice)) {
			users.forEach(user => {
                user.choice = null
            })

			this.runTimer();
		}
	}
}
