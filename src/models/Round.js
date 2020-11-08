import { Model, boolean, include, hasMany, hasOne, belongsTo, string, integer } from '@triframe/scribe';
import { Resource } from '@triframe/core';
import { Timer } from './Timer';
import { sleep } from "@triframe/confectioner"
import { User } from './User';

export class Round extends Resource {
    @include(Model)

    @integer
    result = null;

    @boolean
    isFull = false;

    @hasMany({ as: 'round' })
    users = [];

    @belongsTo({ a: 'Rank' })
    rank = null;

    @hasOne
    timer = null;

    async checkResults() {
        const [userA, userB] = await User.where({ roundId: this.id });

        const result = {
            rock: {
                rock: null,
                paper: userB,
                scissors: userA
            },
            paper: {
                rock: userA,
                paper: null,
                scissors: userB
            },
            scissors: {
                rock: userB,
                paper: userA,
                scissors: null
            },
        }[userA.choice][userB.choice];

        this.result = result?.id ?? null;

        if (result === null) {
            userA.choice = null;
            userB.choice = null;

            this.runTimer();
        }
    }

    async runTimer() {
        let { timer } = Round.read(this.id, `timer {remaining}`);

        if (timer) {
            this.timer.remaining = 5;
        } else {
            timer = await Timer.create({ roundId: this.id, remaining: 5 })
        }

        while (timer.remaining > 0) {
            await sleep(1000)
            timer.remaining--
        }

        const users = await User.where({ roundId: this.id });

        const madeAChoice = (user) => user.choice;

        if (!users.every(madeAChoice) && users.some(madeAChoice)) {
            const decisionMaker = users.find(user => user.choice);

            this.result = decisionMaker.id;
        }
    }

}
