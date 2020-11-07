import { Model, string, include, belongsTo, session, stream } from '@triframe/scribe';
import { Resource } from '@triframe/core';
import { Rank } from './Rank';

export class User extends Resource {
    @include(Model)

	@string
    username = ''

	@belongsTo ({ a: 'Rank' })
	rank = Rank.read(1)

	@belongsTo ({ a: 'Round' })
    round = null

    @session
    static async login(session, username){
        let [ user ] = await User.where({ username });

        if (!user) {
            user = await User.create({ username })
        }

        session.loggedInUserId = user.id

        return null;
    }

    @session
    @stream
    static *current(session){
        return (
            session.loggedInUserId !== null
                ? yield User.read(session.loggedInUserId)
                : null
        )
    }

    @session
    static async logout(session) {
        session.loggedInUserId = null
    }

}
