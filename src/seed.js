import { Rank } from './models/Rank'

export const seed = async () => {

    Rank.truncate()

    await Rank.create({title: 'Egg', position: 0, })
    await Rank.create({ title: 'Raptor', position: 1 });
    await Rank.create({ title: 'Chicken', position: 2 });
    await Rank.create({ title: 'Overlord', position: 3 });

}