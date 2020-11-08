import { Model, string, include, belongsTo, session, stream } from '@triframe/scribe';
import { Resource } from '@triframe/core';
import { Rank } from './Rank';
import { Round } from './Round';

export class User extends Resource {
    @include(Model)

	@string
    username = ''

	@belongsTo ({ a: 'Rank' })
	rank = null

	@belongsTo ({ a: 'Round' })
    round = null

    @session
    static async login(session, username){
        let [ user ] = await User.where({ username });

        if (!user) {
            user = await User.create({ username, rankId: (await Rank.where({position: 0}))[0].id })
        }

        session.loggedInUserId = user.id

        return null;
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
        
        let [round]  = await Round.where({rankId: rankId, isFull: false})
        if (!round) {
            round = await Round.create({rankId: rankId})
        } else {
            round.isFull = true
        }
        const user = await User.read(session.loggedInUserId)
        user.roundId = round.id  
    }

}
