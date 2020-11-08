import { Rank } from './models/Rank'

export const seed = async () => {

    console.log('seed started')

    Rank.truncate()

    await Rank.create({
			title: 'Egg',
			position: 0,
			image: 'egg.png',
		});
    await Rank.create({
			title: 'Raptor',
			position: 1,
			image: 'raptor.png',
		});
    await Rank.create({
			title: 'Chicken',
			position: 2,
			image: '.egg.png',
		});
    await Rank.create({
			title: 'Overlord',
			position: 3,
			image: 'egg.png',
        });
        
    console.log('seed finished');

}