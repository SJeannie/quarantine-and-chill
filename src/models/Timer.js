import { Model, time, include, belongsTo } from '@triframe/scribe';
import { Resource } from '@triframe/core';

export class Timer extends Resource {
    @include(Model)

    @time
    remaining = 5000

    @belongsTo ({ a: 'Round' })
    round = null
}
