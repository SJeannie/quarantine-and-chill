import { Model, string, integer, include, hasMany } from '@triframe/scribe'
import { Resource } from '@triframe/core'
import { session } from '@triframe/scribe';

export class Rank extends Resource {
	@include(Model)
	@string
	title = ''; // levels = egg, raptor, chicken, overlord

	// @string
	// image = ''

	@integer  // title/level as number
	position = 0 

	// @hasMany({of: 'User'})    // Not sure what the argument should be
	// players = []              // Users as players

	@hasMany
    users = []; // Users as users

}