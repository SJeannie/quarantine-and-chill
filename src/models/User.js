import { Model, string, integer, include, belongsTo, session } from '@triframe/scribe';
import { Resource } from '@triframe/core';
import { Rank } from './Rank';

export class User extends Resource {
    @include(Model)
    
	@string
    name = '';

	@belongsTo //({a: 'Rank'})  // argument for Users as players ???
	rank = Rank.read(1);

	@belongsTo //({a: 'Round'})  // argument for Users as players ???
    round = null;

    // @session
    // static async setSession(session, userID){
    //     session.loggedInUserID = userID
    // }
    
}
