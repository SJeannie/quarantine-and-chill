import { Model, string, integer, include, hasMany } from '@triframe/scribe';
import { Resource } from '@triframe/core';

export class Round extends Resource {
    @include(Model)

    // @integer
    // time = 5000  // initial time remaining at start ??? 5 / 10 / 15

    @hasOne
    timer = null

}
