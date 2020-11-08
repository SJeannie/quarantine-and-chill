import { Model, integer, boolean, include, hasMany, hasOne, belongsTo } from '@triframe/scribe';
import { Resource } from '@triframe/core';
import { Timer } from './Timer';
import { sleep } from "@triframe/confectioner"

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

    async runTimer(){
        let timer = await Timer.create({ roundId : this.id, remaining: 5 })
        while(timer.remaining > 0){
            await sleep(1000)
            timer.remaining--
        } 
    }

}
