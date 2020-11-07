import { Model, integer, include, hasMany } from '@triframe/scribe';
import { Resource } from '@triframe/core';

export class Round extends Resource {
    @include(Model)

    @integer
    time = 0  // initial time remaining at start ??? 5 / 10 / 15

	@hasMany({ as : 'round'})
    users = []

    @hasOne
	timer = null
}
