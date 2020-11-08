import { serve } from '@triframe/arbiter'
import path from 'path'
import { seed } from './seed';
import { Rank } from './models/Rank'

serve(path.resolve(__dirname, './models'), {
    session: {
        loggedInUserId: null
    }
}).then(async function(){
    let [rank] = await Rank.where({position: 0})
    !rank ? seed() : null
})