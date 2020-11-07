import { Model, string, integer, include, belongsTo, session } from '@triframe/scribe';
import { Resource } from '@triframe/core';
import { Rank } from './Rank'; // Do we need this line?

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

}
