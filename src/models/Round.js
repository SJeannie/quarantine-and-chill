import { Model, integer, boolean, include, hasMany, hasOne, belongsTo } from '@triframe/scribe';
import { Resource } from '@triframe/core';

export class Round extends Resource {
    @include(Model)

    @integer
    time = 0  // initial time remaining at start ??? 5 / 10 / 15

    @boolean
    isFull = false

	@hasMany({ as : 'round'})
    users = []

    @belongsTo({ a: 'Rank' })
    rank = null

    @hasOne
    timer = null

    async startTimer(){
        let timer = await Timer.create({ roundId : this.id })
    }

    static async start(){
        let round = await Round.create()
        round.startTimer()
    }

}
