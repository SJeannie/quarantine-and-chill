import { Model, string, boolean, include, belongsTo, session, stream } from '@triframe/scribe';
import { Resource } from '@triframe/core';
import { Rank } from './Rank';
import { Round } from './Round';

export class User extends Resource {
    @include(Model)

	@string
    username = ''

    @string
    choice = null

    @boolean
    isWinner = false

	@belongsTo ({ a: 'Rank' })
	rank = null

	@belongsTo ({ a: 'Round' })
    round = null

    async makeChoice(choice){
        this.choice = choice;

        const round = await Round.read(this.roundId);

        await round.checkResults();
    }

    @session
    static async login(session, username){
        let [ user ] = await User.where({ username });

        if (!user) {
            user = await User.create({ username, rankId: (await Rank.where({position: 0}))[0].id, roundId: null });
        }

        session.loggedInUserId = user.id

        return user;
    }

    @session
    @stream
    static *current(session, params){
        return (
            session.loggedInUserId !== null
                ? yield User.read(session.loggedInUserId, params)
                : null
        )
    }

    @session
    static async logout(session) {
        session.loggedInUserId = null
    }

    @session
    static async findMatching(session, rankId){
        let [round]  = await Round.where({rankId: rankId, isFull: false});

        if (!round) {
            round = await Round.create({rankId: rankId})
        } else {
            round.isFull = true
            round.runTimer()
        }
        const user = await User.read(session.loggedInUserId)
        user.roundId = round.id  
    }

    async promote() {
        this.isWinner = true
        const rank = Rank.read(this.rankId);

        if(rank.position < 3){
            this.rankId = (await Rank.where({ position: rank.position + 1 }))[0].id;
        }
    }

    async demote() {
        this.isWinner = false
        const rank = Rank.read(this.rankId);

        if(rank.position === 3){
            this.rankId = (await Rank.where({ position: 0 }))[0].id;
        }
        
        if(rank.position < 3 && rank.position > 0){
            this.rankId = (await Rank.where({ position: rank.position - 1 }))[0].id
        }
    }

}
