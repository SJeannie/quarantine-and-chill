import { Model, string, integer, include, hasMany } from '@triframe/scribe';
import { Resource } from '@triframe/core';

export class Round extends Resource {
    @include(Model)

    @integer
    time = 0  // intitial time remaing at start ??? 5 / 10 / 15

	@hasMany({ as : 'round'})
	users = []
}
