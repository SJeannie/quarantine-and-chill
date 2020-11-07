import { Model, string, integer, include, belongsTo, session } from '@triframe/scribe';
import { Resource } from '@triframe/core';
import { Rank } from './Rank'; // Do we need this line?

export class User extends Resource {
    @include(Model)

	@string
    name = ''

	@belongsTo ({ a: 'Rank' })
	rank = Rank.read(1)

	@belongsTo ({ a: 'Round' })
    round = null

    // @session
    // static async setSession(session, userID){
    //     session.loggedInUserID = userID
    // }

}
