import { Model, include, integer, belongsTo } from '@triframe/scribe';
import { Resource } from '@triframe/core';

export class Timer extends Resource {
    @include(Model)

    @integer
    remaining = 300

    @belongsTo ({ a: 'Round' })
    round = null
}
