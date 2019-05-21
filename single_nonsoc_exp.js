var trials = [
	{
		batch: 1,
		categ: 'anim',
		column1: ['owl',	'farm',	'zoo',	'desert',	'circus',	'farm',	'farm',	'desert',	'desert',	'desert',	'beach',	'desert',	'circus',	'desert',	'cave',	'cave',	'snake',	'arctic',	'desert',	'arctic',	'circus',	'beach',	'farm',	'desert',	'desert',	'desert',	'beach',	'zoo',	'savanna',	'circus',	'cave',	'rat',	'cave',	'farm',	'zoo',	'owl',	'rainforest',	'cave',	'circus',	'cave',	'beach',	'circus',	'cave',	'farm',	'cave',	'cave',	'rat',	'desert',	'savanna',	'pig',	'owl',	'farm',	'cave',	'desert',	'pig',	'cave',	'cave',	'circus',	'farm',	'cave',	'desert',	'circus',	'cave',	'farm',	'desert',	'farm',	'circus',	'farm',	'cave',	'circus',	'circus',	'savanna',	'desert',	'desert',	'zoo',	'rainforest',	'farm',	'beach',	'cat',	'cave',	'zoo',	'beach',	'cave',	'circus',	'circus',	'pig',	'beach',	'rat',	'zoo',	'cave',	'rainforest',	'city',	'cave',	'farm',	'cave',	'rainforest',	'circus',	'desert',	'farm',	'owl',	'savanna',	'beach',	'arctic',	'cave',	'circus',	'zoo',	'savanna',	'desert',	'farm',	'cave',	'rainforest',	'cave',	'rainforest',	'beach'],
		column2: ['snake',	'dog',	'city',	'rainforest',	'desert',	'savanna',	'beach',	'zoo',	'beach',	'dog',	'alligator',	'savanna',	'rainforest',	'cat',	'rainforest',	'savanna',	'crab',	'pig',	'beach',	'cat',	'city',	'zoo',	'beach',	'beach',	'farm',	'farm',	'zoo',	'cat',	'rainforest',	'pig',	'savanna',	'giraffe',	'owl',	'snake',	'owl',	'snake',	'snake',	'savanna',	'rat',	'circus',	'owl',	'pig',	'arctic',	'savanna',	'city',	'savanna',	'dog',	'cat',	'giraffe',	'rat',	'pig',	'pig',	'snake',	'farm',	'snake',	'farm',	'zoo',	'city',	'city',	'zoo',	'zoo',	'pig',	'city',	'cat',	'beach',	'snake',	'farm',	'beach',	'rat',	'arctic',	'savanna',	'rainforest',	'savanna',	'farm',	'rat',	'city',	'savanna',	'city',	'alligator',	'rat',	'arctic',	'city',	'savanna',	'beach',	'rainforest',	'dog',	'rat',	'crab',	'owl',	'circus',	'city',	'crab',	'farm',	'snake',	'circus',	'cat',	'desert',	'rainforest',	'crab',	'giraffe',	'zoo',	'zoo',	'cat',	'pig',	'city',	'arctic',	'city',	'pig',	'owl',	'circus',	'pig',	'farm',	'cat',	'rainforest'],
		column3: ['dog',	'horse',	'crab',	'dog',	'savanna',	'beach',	'rainforest',	'city',	'alligator',	'crab',	'horse',	'pig',	'owl',	'alligator',	'snake',	'rat',	'horse',	'snake',	'horse',	'snake',	'owl',	'giraffe',	'dog',	'rainforest',	'pig',	'zoo',	'dog',	'pig',	'horse',	'rat',	'owl',	'alligator',	'pig',	'giraffe',	'horse',	'horse',	'horse',	'beach',	'snake',	'horse',	'crab',	'snake',	'pig',	'horse',	'pig',	'giraffe',	'horse',	'horse',	'horse',	'giraffe',	'dog',	'dog',	'alligator',	'horse',	'horse',	'cat',	'giraffe',	'giraffe',	'owl',	'rainforest',	'owl',	'horse',	'snake',	'alligator',	'arctic',	'horse',	'rat',	'zoo',	'giraffe',	'snake',	'arctic',	'dog',	'snake',	'beach',	'dog',	'cat',	'giraffe',	'owl',	'horse',	'snake',	'city',	'dog',	'pig',	'snake',	'giraffe',	'alligator',	'alligator',	'alligator',	'pig',	'cat',	'crab',	'alligator',	'arctic',	'crab',	'crab',	'alligator',	'alligator',	'city',	'alligator',	'alligator',	'horse',	'crab',	'horse',	'crab',	'dog',	'owl',	'snake',	'horse',	'alligator',	'dog',	'snake',	'rainforest',	'rat',	'pig']
	},
	{
		batch: 2,
		categ: 'anim',
		column1: ['desert',	'cat',	'savanna',	'owl',	'savanna',	'zoo',	'zoo',	'beach',	'circus',	'pig',	'cave',	'desert',	'cave',	'circus',	'zoo',	'cave',	'circus',	'beach',	'circus',	'farm',	'city',	'farm',	'arctic',	'circus',	'circus',	'circus',	'zoo',	'city',	'beach',	'farm',	'snake',	'city',	'cat',	'rainforest',	'cave',	'circus',	'pig',	'cave',	'cave',	'desert',	'circus',	'arctic',	'zoo',	'cave',	'cave',	'cave',	'arctic',	'city',	'desert',	'savanna',	'farm',	'farm',	'circus',	'savanna',	'rainforest',	'rainforest',	'circus',	'desert',	'rainforest',	'rainforest',	'desert',	'cave',	'pig',	'cave',	'pig',	'cave',	'zoo',	'desert',	'cave',	'zoo',	'desert',	'savanna',	'farm',	'rainforest',	'savanna',	'cave',	'farm',	'rainforest',	'circus',	'cat',	'farm',	'rainforest',	'desert',	'farm',	'savanna',	'cave',	'desert',	'cave',	'arctic',	'savanna',	'cat',	'owl',	'rat',	'beach',	'city',	'farm',	'cat',	'farm',	'savanna',	'rat',	'zoo',	'desert',	'savanna',	'cave',	'farm',	'rat',	'circus',	'farm',	'beach',	'desert',	'rainforest',	'zoo',	'zoo',	'desert'],
		column2: ['rat',	'owl',	'rat',	'rat',	'beach',	'rainforest',	'pig',	'owl',	'rat',	'rat',	'rat',	'farm',	'circus',	'beach',	'arctic',	'beach',	'rainforest',	'arctic',	'desert',	'zoo',	'owl',	'rainforest',	'cat',	'rat',	'zoo',	'arctic',	'city',	'rat',	'rat',	'arctic',	'dog',	'snake',	'pig',	'owl',	'alligator',	'zoo',	'rat',	'pig',	'rat',	'beach',	'dog',	'rainforest',	'rat',	'pig',	'cat',	'desert',	'snake',	'owl',	'savanna',	'dog',	'arctic',	'owl',	'zoo',	'owl',	'city',	'city',	'owl',	'dog',	'cat',	'snake',	'giraffe',	'zoo',	'rat',	'dog',	'snake',	'beach',	'cat',	'cat',	'circus',	'giraffe',	'farm',	'arctic',	'cat',	'owl',	'pig',	'farm',	'city',	'rat',	'farm',	'snake',	'city',	'city',	'arctic',	'beach',	'arctic',	'snake',	'beach',	'arctic',	'snake',	'snake',	'giraffe',	'crab',	'dog',	'crab',	'pig',	'zoo',	'crab',	'arctic',	'zoo',	'snake',	'arctic',	'cat',	'zoo',	'giraffe',	'beach',	'dog',	'beach',	'rat',	'city',	'rainforest',	'pig',	'city',	'pig',	'savanna'],
		column3: ['crab',	'snake',	'alligator',	'giraffe',	'owl',	'pig',	'giraffe',	'horse',	'crab',	'alligator',	'alligator',	'rat',	'arctic',	'dog',	'horse',	'alligator',	'snake',	'giraffe',	'dog',	'arctic',	'rat',	'cat',	'giraffe',	'dog',	'dog',	'giraffe',	'pig',	'alligator',	'giraffe',	'owl',	'horse',	'alligator',	'crab',	'giraffe',	'horse',	'owl',	'snake',	'alligator',	'horse',	'pig',	'crab',	'city',	'crab',	'horse',	'snake',	'rainforest',	'crab',	'alligator',	'horse',	'crab',	'alligator',	'crab',	'city',	'dog',	'owl',	'rat',	'dog',	'alligator',	'giraffe',	'alligator',	'crab',	'pig',	'dog',	'horse',	'crab',	'crab',	'horse',	'crab',	'zoo',	'horse',	'owl',	'crab',	'rat',	'dog',	'alligator',	'pig',	'crab',	'dog',	'arctic',	'giraffe',	'rat',	'alligator',	'rat',	'horse',	'rat',	'crab',	'zoo',	'owl',	'dog',	'dog',	'horse',	'alligator',	'alligator',	'alligator',	'snake',	'alligator',	'alligator',	'rainforest',	'rainforest',	'alligator',	'rainforest',	'rat',	'pig',	'alligator',	'pig',	'giraffe',	'zoo',	'horse',	'pig',	'owl',	'dog',	'dog',	'horse',	'dog']
	}
	{
		batch: 3,
		categ: 'anim',
		column1: ['circus',	'cave',	'circus',	'zoo',	'rainforest',	'cave',	'circus',	'circus',	'zoo',	'desert',	'arctic',	'desert',	'cave',	'circus',	'beach',	'rat',	'desert',	'pig',	'cave',	'farm',	'circus',	'arctic',	'desert',	'circus',	'farm',	'cave',	'beach',	'dog',	'savanna',	'farm',	'zoo',	'circus',	'beach',	'arctic',	'city',	'desert',	'cave',	'beach',	'snake',	'savanna',	'circus',	'city',	'arctic',	'dog',	'farm',	'savanna',	'circus',	'owl',	'farm',	'cave',	'rainforest',	'farm',	'beach',	'pig',	'farm',	'beach',	'arctic',	'desert',	'beach',	'cat',	'cat',	'desert',	'farm',	'circus',	'cat',	'owl',	'circus',	'circus',	'cave',	'circus',	'desert',	'beach',	'beach',	'circus',	'desert',	'desert',	'farm',	'pig',	'cave',	'farm',	'farm',	'desert',	'desert',	'rainforest',	'desert',	'farm',	'rainforest',	'zoo',	'pig',	'farm',	'circus',	'savanna',	'cave',	'circus',	'circus',	'owl',	'desert',	'circus',	'beach',	'circus',	'zoo',	'rainforest',	'beach',	'beach',	'desert',	'city',	'circus',	'farm',	'arctic',	'savanna',	'cave',	'farm',	'desert',	'zoo'],
		column2: ['farm',	'desert',	'savanna',	'rat',	'dog',	'zoo',	'desert',	'arctic',	'rainforest',	'farm',	'pig',	'city',	'city',	'desert',	'arctic',	'snake',	'zoo',	'dog',	'rainforest',	'city',	'cat',	'alligator',	'savanna',	'farm',	'savanna',	'city',	'zoo',	'giraffe',	'beach',	'savanna',	'pig',	'snake',	'zoo',	'city',	'rat',	'giraffe',	'zoo',	'arctic',	'dog',	'beach',	'snake',	'pig',	'cat',	'giraffe',	'savanna',	'rainforest',	'alligator',	'rat',	'zoo',	'savanna',	'giraffe',	'rainforest',	'giraffe',	'snake',	'cat',	'city',	'rainforest',	'pig',	'giraffe',	'dog',	'pig',	'cat',	'rainforest',	'cat',	'pig',	'dog',	'farm',	'desert',	'farm',	'farm',	'owl',	'snake',	'rainforest',	'beach',	'alligator',	'owl',	'cat',	'rat',	'dog',	'beach',	'rainforest',	'rat',	'owl',	'pig',	'owl',	'city',	'owl',	'owl',	'crab',	'rainforest',	'savanna',	'pig',	'city',	'rainforest',	'farm',	'snake',	'pig',	'zoo',	'city',	'zoo',	'cat',	'rat',	'city',	'rat',	'city',	'pig',	'pig',	'zoo',	'crab',	'rat',	'beach',	'zoo',	'city',	'rainforest'],
		column3: ['dog',	'beach',	'rat',	'alligator',	'crab',	'rat',	'rat',	'cat',	'rat',	'alligator',	'giraffe',	'snake',	'horse',	'horse',	'alligator',	'crab',	'horse',	'crab',	'crab',	'pig',	'owl',	'horse',	'rat',	'giraffe',	'alligator',	'dog',	'city',	'alligator',	'city',	'zoo',	'alligator',	'alligator',	'alligator',	'alligator',	'horse',	'horse',	'crab',	'owl',	'crab',	'giraffe',	'crab',	'horse',	'dog',	'crab',	'crab',	'alligator',	'horse',	'alligator',	'rainforest',	'snake',	'crab',	'rat',	'horse',	'dog',	'snake',	'giraffe',	'dog',	'alligator',	'crab',	'alligator',	'rat',	'snake',	'pig',	'crab',	'giraffe',	'alligator',	'beach',	'crab',	'giraffe',	'rainforest',	'horse',	'alligator',	'cat',	'rainforest',	'horse',	'dog',	'owl',	'crab',	'crab',	'cat',	'owl',	'alligator',	'pig',	'horse',	'giraffe',	'snake',	'snake',	'crab',	'horse',	'snake',	'alligator',	'crab',	'alligator',	'alligator',	'zoo',	'alligator',	'snake',	'rainforest',	'alligator',	'alligator',	'crab',	'alligator',	'snake',	'horse',	'rat',	'giraffe',	'alligator',	'pig',	'horse',	'giraffe',	'rat',	'horse',	'pig',	'giraffe']
	}
	{
		batch: 4,
		categ: 'anim',
		column1: ['savanna',	'rainforest',	'beach',	'cave',	'cave',	'cave',	'cave',	'savanna',	'owl',	'snake',	'circus',	'desert',	'cave',	'farm',	'zoo',	'desert',	'desert',	'zoo',	'cave',	'arctic',	'savanna',	'beach',	'cave',	'farm',	'circus',	'farm',	'circus',	'cave',	'arctic',	'farm',	'cave',	'pig',	'cave',	'desert',	'desert',	'desert',	'savanna',	'desert',	'circus',	'desert',	'beach',	'circus',	'arctic',	'savanna',	'savanna',	'desert',	'arctic',	'city',	'cave',	'owl',	'circus',	'arctic',	'city',	'cat',	'farm',	'cave',	'cave',	'farm',	'savanna',	'rainforest',	'desert',	'circus',	'farm',	'desert',	'desert',	'farm',	'beach',	'beach',	'city',	'savanna',	'rat',	'farm',	'cave',	'cave',	'cave',	'circus',	'savanna',	'beach',	'cave',	'circus',	'beach',	'cave',	'farm',	'zoo',	'owl',	'city',	'circus',	'desert',	'farm',	'savanna',	'cave',	'cave',	'farm',	'savanna',	'desert',	'city',	'savanna',	'cave',	'desert',	'desert',	'rainforest',	'cat',	'cave',	'beach',	'snake',	'rainforest',	'zoo',	'beach',	'cave',	'cave',	'circus',	'cave',	'cave',	'cave'],
		column2: ['city',	'crab',	'city',	'circus',	'cat',	'cat',	'circus',	'city',	'dog',	'giraffe',	'beach',	'owl',	'desert',	'zoo',	'pig',	'beach',	'city',	'owl',	'desert',	'rat',	'beach',	'cat',	'rainforest',	'zoo',	'dog',	'arctic',	'crab',	'rainforest',	'rat',	'beach',	'dog',	'crab',	'farm',	'zoo',	'snake',	'farm',	'cat',	'savanna',	'cat',	'beach',	'arctic',	'rainforest',	'rainforest',	'owl',	'cat',	'arctic',	'city',	'rat',	'owl',	'rat',	'cat',	'city',	'dog',	'snake',	'owl',	'circus',	'arctic',	'cat',	'owl',	'snake',	'rainforest',	'rat',	'snake',	'savanna',	'savanna',	'savanna',	'arctic',	'dog',	'giraffe',	'rainforest',	'dog',	'arctic',	'owl',	'zoo',	'dog',	'city',	'beach',	'pig',	'zoo',	'beach',	'arctic',	'zoo',	'cat',	'rainforest',	'pig',	'owl',	'arctic',	'farm',	'savanna',	'dog',	'farm',	'desert',	'rat',	'rat',	'farm',	'cat',	'city',	'cat',	'zoo',	'rainforest',	'giraffe',	'owl',	'zoo',	'rainforest',	'alligator',	'rat',	'cat',	'owl',	'city',	'cat',	'zoo',	'zoo',	'rainforest',	'owl'],
		column3: ['dog',	'alligator',	'horse',	'rainforest',	'crab',	'dog',	'alligator',	'horse',	'crab',	'alligator',	'crab',	'rat',	'zoo',	'crab',	'crab',	'dog',	'alligator',	'giraffe',	'arctic',	'dog',	'rainforest',	'horse',	'rat',	'city',	'alligator',	'pig',	'alligator',	'dog',	'giraffe',	'snake',	'giraffe',	'alligator',	'dog',	'rainforest',	'dog',	'snake',	'rat',	'city',	'giraffe',	'rat',	'city',	'city',	'cat',	'pig',	'horse',	'rainforest',	'snake',	'dog',	'snake',	'crab',	'pig',	'crab',	'alligator',	'alligator',	'snake',	'farm',	'crab',	'crab',	'horse',	'dog',	'crab',	'alligator',	'dog',	'crab',	'arctic',	'cat',	'snake',	'crab',	'crab',	'city',	'crab',	'city',	'alligator',	'city',	'alligator',	'snake',	'rat',	'snake',	'cat',	'cat',	'rat',	'owl',	'dog',	'horse',	'rat',	'pig',	'rainforest',	'savanna',	'snake',	'giraffe',	'beach',	'giraffe',	'snake',	'horse',	'crab',	'owl',	'alligator',	'alligator',	'giraffe',	'pig',	'horse',	'alligator',	'alligator',	'snake',	'horse',	'crab',	'dog',	'snake',	'rat',	'giraffe',	'giraffe',	'arctic',	'cat',	'dog']
	}
	{
		batch: 5,
		categ: 'anim',
		column1: ['desert',	'desert',	'city',	'circus',	'owl',	'desert',	'circus',	'zoo',	'beach',	'circus',	'beach',	'beach',	'circus',	'cat',	'cave',	'zoo',	'arctic',	'farm',	'farm',	'cave',	'pig',	'desert',	'city',	'farm',	'rainforest',	'zoo',	'beach',	'savanna',	'arctic',	'beach',	'circus',	'cat',	'beach',	'desert',	'desert',	'desert',	'cave',	'city',	'desert',	'farm',	'snake',	'arctic',	'desert',	'savanna',	'desert',	'circus',	'cave',	'farm',	'savanna',	'beach',	'farm',	'arctic',	'farm',	'desert',	'cat',	'cave',	'rainforest',	'cave',	'savanna',	'circus',	'city',	'savanna',	'desert',	'desert',	'desert',	'farm',	'desert',	'cat',	'cave',	'cave',	'farm',	'beach',	'farm',	'cave',	'arctic',	'rainforest',	'beach',	'beach',	'savanna',	'desert',	'owl',	'savanna',	'cave',	'farm',	'savanna',	'rat',	'cave',	'owl',	'circus',	'desert',	'cave',	'desert',	'zoo',	'desert',	'beach',	'savanna',	'circus',	'owl',	'cave',	'desert',	'beach',	'circus',	'arctic',	'desert',	'rainforest',	'arctic',	'desert',	'desert',	'arctic',	'desert',	'farm',	'desert',	'savanna',	'savanna'],
		column2: ['city',	'city',	'owl',	'cat',	'pig',	'beach',	'desert',	'owl',	'pig',	'city',	'snake',	'city',	'beach',	'snake',	'savanna',	'giraffe',	'owl',	'rainforest',	'giraffe',	'owl',	'snake',	'savanna',	'snake',	'owl',	'dog',	'arctic',	'owl',	'rainforest',	'giraffe',	'rainforest',	'zoo',	'pig',	'zoo',	'arctic',	'city',	'savanna',	'circus',	'pig',	'arctic',	'zoo',	'giraffe',	'rat',	'beach',	'zoo',	'beach',	'farm',	'arctic',	'owl',	'rainforest',	'arctic',	'owl',	'dog',	'rat',	'farm',	'pig',	'arctic',	'city',	'desert',	'snake',	'owl',	'snake',	'arctic',	'cat',	'pig',	'zoo',	'arctic',	'savanna',	'dog',	'savanna',	'city',	'arctic',	'rat',	'zoo',	'beach',	'cat',	'pig',	'owl',	'cat',	'giraffe',	'pig',	'rat',	'zoo',	'desert',	'city',	'rainforest',	'giraffe',	'beach',	'pig',	'beach',	'farm',	'zoo',	'beach',	'rainforest',	'city',	'rainforest',	'arctic',	'snake',	'snake',	'farm',	'zoo',	'rainforest',	'city',	'rat',	'cat',	'dog',	'city',	'city',	'arctic',	'city',	'farm',	'rainforest',	'zoo',	'cat',	'cat'],
		column3: ['horse',	'dog',	'giraffe',	'horse',	'crab',	'city',	'arctic',	'dog',	'giraffe',	'crab',	'crab',	'cat',	'giraffe',	'dog',	'alligator',	'alligator',	'pig',	'crab',	'alligator',	'horse',	'alligator',	'beach',	'crab',	'giraffe',	'horse',	'crab',	'rat',	'owl',	'alligator',	'city',	'cat',	'dog',	'arctic',	'snake',	'owl',	'giraffe',	'owl',	'alligator',	'cat',	'cat',	'horse',	'snake',	'giraffe',	'rat',	'snake',	'horse',	'giraffe',	'pig',	'snake',	'rainforest',	'rat',	'horse',	'giraffe',	'dog',	'horse',	'alligator',	'pig',	'snake',	'alligator',	'snake',	'giraffe',	'giraffe',	'owl',	'dog',	'rat',	'cat',	'cat',	'crab',	'dog',	'giraffe',	'horse',	'crab',	'giraffe',	'zoo',	'alligator',	'rat',	'giraffe',	'crab',	'crab',	'crab',	'snake',	'snake',	'rat',	'giraffe',	'rat',	'crab',	'arctic',	'alligator',	'alligator',	'city',	'horse',	'owl',	'owl',	'giraffe',	'giraffe',	'snake',	'dog',	'crab',	'zoo',	'dog',	'rat',	'horse',	'alligator',	'dog',	'alligator',	'giraffe',	'crab',	'city',	'owl',	'arctic',	'alligator',	'pig',	'dog',	'owl']
	},
	{
		batch: 6,
		categ: 'anim',
		column1: ['cave',	'zoo',	'farm',	'rainforest',	'circus',	'cave',	'rat',	'rainforest',	'cat',	'beach',	'zoo',	'circus',	'circus',	'desert',	'circus',	'cave',	'circus',	'farm',	'cave',	'beach',	'cave',	'savanna',	'giraffe',	'circus',	'zoo',	'arctic',	'farm',	'savanna',	'cave',	'rainforest',	'rainforest',	'cave',	'arctic',	'cat',	'cave',	'cave',	'arctic',	'cat',	'cat',	'circus',	'beach',	'pig',	'zoo',	'cave',	'circus',	'farm',	'desert',	'crab',	'circus',	'cave',	'savanna',	'zoo',	'circus',	'beach',	'savanna',	'savanna',	'desert',	'savanna',	'pig',	'savanna',	'rainforest',	'savanna',	'zoo',	'arctic',	'cave',	'circus',	'rainforest',	'owl',	'zoo',	'desert',	'cat',	'savanna',	'rainforest',	'city',	'beach',	'city',	'arctic',	'arctic',	'circus',	'city',	'savanna',	'beach',	'city',	'desert',	'circus',	'cave',	'circus',	'savanna',	'savanna',	'cave',	'savanna',	'zoo',	'arctic',	'circus',	'farm',	'cave',	'circus',	'cave',	'cave',	'arctic',	'circus',	'arctic',	'cave',	'cave',	'desert',	'pig',	'circus',	'circus',	'desert',	'zoo',	'savanna',	'zoo',	'circus',	'city'],
		column2: ['rainforest',	'snake',	'pig',	'pig',	'zoo',	'farm',	'snake',	'city',	'owl',	'rainforest',	'crab',	'savanna',	'cat',	'rat',	'desert',	'desert',	'desert',	'rat',	'giraffe',	'cat',	'desert',	'city',	'alligator',	'desert',	'city',	'rainforest',	'beach',	'rainforest',	'circus',	'rat',	'rat',	'pig',	'dog',	'rat',	'circus',	'circus',	'rat',	'dog',	'rat',	'desert',	'rat',	'alligator',	'city',	'arctic',	'savanna',	'giraffe',	'zoo',	'alligator',	'zoo',	'cat',	'crab',	'snake',	'arctic',	'rainforest',	'giraffe',	'pig',	'arctic',	'arctic',	'giraffe',	'pig',	'owl',	'arctic',	'arctic',	'cat',	'rainforest',	'beach',	'owl',	'pig',	'snake',	'owl',	'snake',	'city',	'snake',	'giraffe',	'pig',	'cat',	'cat',	'owl',	'dog',	'alligator',	'beach',	'rat',	'pig',	'arctic',	'owl',	'rainforest',	'rainforest',	'arctic',	'arctic',	'rat',	'alligator',	'rainforest',	'crab',	'beach',	'beach',	'city',	'owl',	'city',	'desert',	'rainforest',	'dog',	'dog',	'farm',	'farm',	'savanna',	'dog',	'farm',	'city',	'arctic',	'cat',	'pig',	'cat',	'savanna',	'dog'],
		column3: ['pig',	'horse',	'snake',	'giraffe',	'crab',	'savanna',	'dog',	'horse',	'rat',	'alligator',	'horse',	'owl',	'alligator',	'snake',	'giraffe',	'pig',	'pig',	'alligator',	'horse',	'giraffe',	'alligator',	'rat',	'horse',	'city',	'owl',	'alligator',	'alligator',	'pig',	'giraffe',	'giraffe',	'snake',	'snake',	'alligator',	'crab',	'city',	'desert',	'crab',	'giraffe',	'snake',	'owl',	'snake',	'horse',	'cat',	'cat',	'horse',	'horse',	'crab',	'horse',	'arctic',	'pig',	'alligator',	'giraffe',	'crab',	'owl',	'alligator',	'horse',	'dog',	'rainforest',	'horse',	'dog',	'rat',	'dog',	'rat',	'owl',	'owl',	'rat',	'pig',	'giraffe',	'dog',	'alligator',	'crab',	'cat',	'crab',	'horse',	'rat',	'pig',	'crab',	'rat',	'horse',	'horse',	'pig',	'dog',	'dog',	'horse',	'crab',	'city',	'crab',	'city',	'owl',	'dog',	'horse',	'alligator',	'alligator',	'arctic',	'rat',	'crab',	'pig',	'cat',	'farm',	'pig',	'giraffe',	'giraffe',	'snake',	'crab',	'alligator',	'horse',	'owl',	'pig',	'alligator',	'alligator',	'rat',	'snake',	'crab',	'crab']
	}
	{
		batch: 7,
		categ: 'anim',
		column1: ['cave',	'beach',	'cat',	'farm',	'cave',	'savanna',	'cave',	'arctic',	'farm',	'dog',	'rainforest',	'desert',	'owl',	'zoo',	'beach',	'circus',	'zoo',	'circus',	'zoo',	'cave',	'savanna',	'cave',	'arctic',	'farm',	'desert',	'zoo',	'desert',	'cave',	'cave',	'arctic',	'cave',	'zoo',	'farm',	'farm',	'circus',	'savanna',	'city',	'farm',	'cave',	'arctic',	'circus',	'pig',	'circus',	'farm',	'beach',	'cave',	'zoo',	'beach',	'cave',	'beach',	'farm',	'arctic',	'circus',	'cave',	'beach',	'zoo',	'arctic',	'savanna',	'rainforest',	'cave',	'circus',	'farm',	'farm',	'savanna',	'pig',	'rainforest',	'city',	'arctic',	'savanna',	'savanna',	'arctic',	'cave',	'cave',	'cave',	'farm',	'cave',	'farm',	'zoo',	'desert',	'cave',	'beach',	'desert',	'beach',	'dog',	'cave',	'city',	'desert',	'circus',	'beach',	'circus',	'snake',	'cave',	'beach',	'cat',	'savanna',	'circus',	'desert',	'desert',	'farm',	'circus',	'arctic',	'city',	'farm',	'city',	'savanna',	'cave',	'desert',	'circus',	'cat',	'zoo',	'cat',	'city',	'city',	'circus'],
		column2: ['rat',	'cat',	'pig',	'pig',	'savanna',	'owl',	'savanna',	'city',	'arctic',	'crab',	'cat',	'pig',	'alligator',	'pig',	'dog',	'rainforest',	'arctic',	'giraffe',	'alligator',	'crab',	'city',	'savanna',	'snake',	'arctic',	'rat',	'crab',	'dog',	'circus',	'circus',	'owl',	'beach',	'city',	'city',	'zoo',	'giraffe',	'zoo',	'cat',	'beach',	'snake',	'rat',	'owl',	'dog',	'zoo',	'dog',	'dog',	'arctic',	'city',	'zoo',	'farm',	'cat',	'savanna',	'rainforest',	'giraffe',	'cat',	'snake',	'cat',	'rainforest',	'owl',	'owl',	'beach',	'arctic',	'rainforest',	'city',	'zoo',	'giraffe',	'pig',	'rat',	'city',	'cat',	'arctic',	'cat',	'desert',	'beach',	'beach',	'beach',	'pig',	'savanna',	'owl',	'snake',	'cat',	'rainforest',	'cat',	'owl',	'alligator',	'arctic',	'owl',	'snake',	'farm',	'pig',	'farm',	'crab',	'pig',	'dog',	'crab',	'city',	'crab',	'zoo',	'snake',	'beach',	'farm',	'owl',	'cat',	'owl',	'dog',	'rat',	'desert',	'dog',	'rainforest',	'dog',	'city',	'giraffe',	'crab',	'snake',	'city'],
		column3: ['crab',	'dog',	'alligator',	'horse',	'arctic',	'snake',	'rainforest',	'cat',	'rat',	'horse',	'pig',	'rat',	'horse',	'dog',	'giraffe',	'cat',	'pig',	'crab',	'horse',	'alligator',	'crab',	'zoo',	'giraffe',	'snake',	'dog',	'alligator',	'giraffe',	'pig',	'beach',	'horse',	'pig',	'horse',	'dog',	'rat',	'horse',	'dog',	'horse',	'crab',	'dog',	'horse',	'alligator',	'giraffe',	'rat',	'crab',	'alligator',	'horse',	'alligator',	'cat',	'owl',	'alligator',	'city',	'snake',	'alligator',	'rat',	'horse',	'rat',	'rat',	'crab',	'horse',	'snake',	'rat',	'giraffe',	'alligator',	'giraffe',	'crab',	'alligator',	'giraffe',	'pig',	'crab',	'alligator',	'rat',	'cat',	'cat',	'rainforest',	'giraffe',	'dog',	'pig',	'snake',	'giraffe',	'owl',	'dog',	'giraffe',	'pig',	'horse',	'dog',	'snake',	'crab',	'pig',	'horse',	'city',	'alligator',	'rat',	'horse',	'horse',	'giraffe',	'horse',	'snake',	'alligator',	'city',	'cat',	'dog',	'giraffe',	'horse',	'giraffe',	'dog',	'dog',	'horse',	'rat',	'horse',	'rat',	'crab',	'horse',	'horse',	'rat']
	}
	{
		batch: 8,
		categ: 'anim',
		column1: ['zoo',	'desert',	'owl',	'circus',	'rainforest',	'beach',	'circus',	'cave',	'circus',	'arctic',	'desert',	'savanna',	'cave',	'rainforest',	'beach',	'zoo',	'zoo',	'arctic',	'savanna',	'cat',	'beach',	'cave',	'cave',	'farm',	'circus',	'savanna',	'savanna',	'arctic',	'desert',	'arctic',	'desert',	'circus',	'beach',	'circus',	'city',	'savanna',	'circus',	'savanna',	'beach',	'circus',	'beach',	'rainforest',	'cave',	'cat',	'zoo',	'farm',	'desert',	'savanna',	'circus',	'city',	'circus',	'owl',	'dog',	'circus',	'farm',	'cat',	'arctic',	'desert',	'city',	'cave',	'circus',	'circus',	'cave',	'beach',	'circus',	'city',	'zoo',	'desert',	'rainforest',	'owl',	'cat',	'farm',	'savanna',	'circus',	'desert',	'desert',	'cave',	'desert',	'savanna',	'cave',	'cat',	'savanna',	'cave',	'beach',	'rat',	'arctic',	'desert',	'owl',	'farm',	'city',	'savanna',	'farm',	'beach',	'farm',	'cat',	'pig',	'zoo',	'owl',	'savanna',	'circus',	'farm',	'city',	'beach',	'zoo',	'farm',	'circus',	'circus',	'savanna',	'cave',	'savanna',	'cave',	'circus',	'savanna',	'beach'],
		column2: ['rat',	'rat',	'dog',	'savanna',	'city',	'cat',	'savanna',	'owl',	'zoo',	'city',	'farm',	'beach',	'arctic',	'alligator',	'cat',	'city',	'rainforest',	'city',	'beach',	'rat',	'cat',	'circus',	'desert',	'savanna',	'owl',	'snake',	'beach',	'owl',	'cat',	'owl',	'savanna',	'desert',	'zoo',	'owl',	'cat',	'zoo',	'pig',	'cat',	'owl',	'arctic',	'snake',	'crab',	'farm',	'rat',	'arctic',	'savanna',	'rainforest',	'cat',	'savanna',	'pig',	'beach',	'pig',	'crab',	'cat',	'dog',	'pig',	'owl',	'zoo',	'rat',	'pig',	'savanna',	'city',	'rainforest',	'rainforest',	'savanna',	'owl',	'owl',	'owl',	'cat',	'dog',	'giraffe',	'savanna',	'zoo',	'arctic',	'snake',	'rainforest',	'zoo',	'pig',	'arctic',	'savanna',	'owl',	'beach',	'farm',	'arctic',	'crab',	'dog',	'owl',	'giraffe',	'zoo',	'cat',	'owl',	'dog',	'giraffe',	'cat',	'owl',	'snake',	'giraffe',	'rat',	'rat',	'savanna',	'beach',	'cat',	'rainforest',	'rainforest',	'rat',	'desert',	'desert',	'zoo',	'beach',	'beach',	'beach',	'rainforest',	'rainforest',	'owl'],
		column3: ['giraffe',	'horse',	'giraffe',	'city',	'snake',	'pig',	'cat',	'rat',	'horse',	'horse',	'cat',	'alligator',	'rainforest',	'horse',	'snake',	'giraffe',	'crab',	'dog',	'crab',	'dog',	'rat',	'snake',	'horse',	'dog',	'horse',	'horse',	'arctic',	'alligator',	'pig',	'snake',	'zoo',	'snake',	'owl',	'rat',	'alligator',	'owl',	'dog',	'giraffe',	'alligator',	'pig',	'giraffe',	'horse',	'alligator',	'horse',	'cat',	'rat',	'cat',	'pig',	'zoo',	'crab',	'horse',	'horse',	'alligator',	'snake',	'alligator',	'snake',	'crab',	'arctic',	'crab',	'giraffe',	'giraffe',	'alligator',	'alligator',	'crab',	'beach',	'dog',	'rat',	'snake',	'crab',	'horse',	'alligator',	'owl',	'arctic',	'horse',	'horse',	'giraffe',	'snake',	'giraffe',	'cat',	'cat',	'giraffe',	'zoo',	'city',	'cat',	'horse',	'crab',	'crab',	'crab',	'owl',	'rat',	'giraffe',	'giraffe',	'alligator',	'pig',	'dog',	'giraffe',	'crab',	'dog',	'snake',	'pig',	'arctic',	'crab',	'horse',	'city',	'dog',	'cat',	'beach',	'crab',	'giraffe',	'cat',	'horse',	'dog',	'cat',	'dog']
	}
	{
		batch: 9,
		categ: 'anim',
		column1: ['farm',	'circus',	'desert',	'city',	'circus',	'circus',	'farm',	'farm',	'zoo',	'rainforest',	'cat',	'farm',	'savanna',	'zoo',	'desert',	'owl',	'circus',	'circus',	'zoo',	'circus',	'zoo',	'farm',	'arctic',	'cave',	'savanna',	'savanna',	'cave',	'savanna',	'savanna',	'desert',	'farm',	'cave',	'farm',	'city',	'desert',	'circus',	'rainforest',	'desert',	'cave',	'zoo',	'arctic',	'farm',	'cave',	'farm',	'savanna',	'desert',	'cave',	'zoo',	'zoo',	'farm',	'desert',	'zoo',	'cat',	'farm',	'savanna',	'owl',	'savanna',	'circus',	'desert',	'beach',	'giraffe',	'desert',	'snake',	'beach',	'savanna',	'beach',	'desert',	'cave',	'zoo',	'circus',	'rainforest',	'circus',	'cat',	'savanna',	'arctic',	'desert',	'circus',	'farm',	'savanna',	'zoo',	'zoo',	'beach',	'desert',	'circus',	'beach',	'cave',	'zoo',	'snake',	'zoo',	'circus',	'circus',	'savanna',	'rat',	'desert',	'savanna',	'beach',	'savanna',	'rainforest',	'cave',	'desert',	'cave',	'beach',	'beach',	'pig',	'circus',	'arctic',	'cave',	'cave',	'owl',	'zoo',	'rainforest',	'beach',	'circus',	'cave'],
		column2: ['alligator',	'rainforest',	'savanna',	'rat',	'savanna',	'farm',	'pig',	'pig',	'rainforest',	'cat',	'snake',	'cat',	'snake',	'pig',	'arctic',	'rat',	'desert',	'zoo',	'pig',	'desert',	'dog',	'beach',	'giraffe',	'circus',	'rainforest',	'city',	'beach',	'zoo',	'zoo',	'arctic',	'rainforest',	'savanna',	'rainforest',	'owl',	'city',	'snake',	'owl',	'farm',	'savanna',	'rainforest',	'giraffe',	'giraffe',	'city',	'zoo',	'crab',	'rainforest',	'desert',	'rat',	'cat',	'city',	'rainforest',	'rainforest',	'owl',	'zoo',	'beach',	'pig',	'snake',	'pig',	'arctic',	'cat',	'crab',	'rainforest',	'giraffe',	'arctic',	'owl',	'pig',	'rainforest',	'desert',	'arctic',	'zoo',	'cat',	'rat',	'owl',	'pig',	'pig',	'arctic',	'arctic',	'city',	'dog',	'dog',	'rat',	'pig',	'farm',	'owl',	'zoo',	'zoo',	'snake',	'dog',	'dog',	'pig',	'savanna',	'owl',	'alligator',	'crab',	'arctic',	'snake',	'rat',	'city',	'farm',	'zoo',	'circus',	'city',	'zoo',	'rat',	'farm',	'rainforest',	'beach',	'snake',	'crab',	'city',	'pig',	'pig',	'rat',	'rainforest'],
		column3: ['horse',	'horse',	'rainforest',	'snake',	'snake',	'snake',	'rat',	'giraffe',	'cat',	'snake',	'horse',	'giraffe',	'giraffe',	'rat',	'pig',	'horse',	'farm',	'snake',	'snake',	'rainforest',	'giraffe',	'owl',	'horse',	'rat',	'crab',	'pig',	'city',	'cat',	'alligator',	'owl',	'dog',	'city',	'city',	'crab',	'cat',	'horse',	'alligator',	'giraffe',	'crab',	'dog',	'crab',	'crab',	'owl',	'dog',	'horse',	'horse',	'savanna',	'horse',	'owl',	'cat',	'alligator',	'snake',	'pig',	'snake',	'snake',	'snake',	'crab',	'giraffe',	'giraffe',	'owl',	'horse',	'rat',	'crab',	'dog',	'rat',	'alligator',	'snake',	'crab',	'dog',	'pig',	'owl',	'horse',	'crab',	'snake',	'rat',	'crab',	'alligator',	'horse',	'alligator',	'horse',	'snake',	'crab',	'rainforest',	'giraffe',	'rat',	'dog',	'alligator',	'alligator',	'alligator',	'crab',	'dog',	'alligator',	'horse',	'horse',	'pig',	'dog',	'crab',	'giraffe',	'horse',	'alligator',	'savanna',	'crab',	'snake',	'horse',	'savanna',	'horse',	'dog',	'giraffe',	'horse',	'snake',	'crab',	'dog',	'giraffe',	'horse']
	}
	{
		batch: 10,
		categ: 'anim',
		column1: ['farm',	'circus',	'rainforest',	'farm',	'cave',	'circus',	'cave',	'farm',	'savanna',	'cave',	'rainforest',	'cave',	'farm',	'farm',	'savanna',	'arctic',	'savanna',	'city',	'zoo',	'savanna',	'arctic',	'owl',	'cave',	'circus',	'farm',	'circus',	'desert',	'circus',	'circus',	'beach',	'dog',	'beach',	'desert',	'circus',	'desert',	'cave',	'pig',	'arctic',	'desert',	'arctic',	'zoo',	'beach',	'farm',	'circus',	'cat',	'farm',	'city',	'arctic',	'rainforest',	'rainforest',	'arctic',	'rainforest',	'arctic',	'rat',	'arctic',	'farm',	'zoo',	'rainforest',	'circus',	'arctic',	'circus',	'rainforest',	'farm',	'desert',	'cave',	'circus',	'savanna',	'rat',	'arctic',	'cave',	'desert',	'city',	'circus',	'savanna',	'beach',	'farm',	'city',	'city',	'cave',	'zoo',	'circus',	'circus',	'city',	'savanna',	'savanna',	'giraffe',	'desert',	'arctic',	'farm',	'city',	'zoo',	'zoo',	'savanna',	'cave',	'beach',	'beach',	'beach',	'rat',	'arctic',	'cave',	'cave',	'owl',	'cave',	'zoo',	'snake',	'cat',	'savanna',	'circus',	'cave',	'rainforest',	'farm',	'beach',	'cat',	'cave'],
		column2: ['savanna',	'snake',	'snake',	'rainforest',	'beach',	'cat',	'desert',	'arctic',	'zoo',	'farm',	'cat',	'crab',	'pig',	'savanna',	'pig',	'pig',	'rainforest',	'snake',	'arctic',	'city',	'rainforest',	'giraffe',	'snake',	'farm',	'crab',	'farm',	'rat',	'arctic',	'savanna',	'arctic',	'giraffe',	'arctic',	'zoo',	'desert',	'crab',	'arctic',	'giraffe',	'owl',	'beach',	'pig',	'arctic',	'zoo',	'snake',	'arctic',	'owl',	'arctic',	'dog',	'pig',	'cat',	'dog',	'snake',	'owl',	'pig',	'snake',	'cat',	'owl',	'cat',	'city',	'cat',	'rainforest',	'city',	'rat',	'arctic',	'savanna',	'savanna',	'arctic',	'beach',	'giraffe',	'snake',	'owl',	'giraffe',	'cat',	'beach',	'beach',	'zoo',	'pig',	'owl',	'giraffe',	'giraffe',	'dog',	'beach',	'rainforest',	'pig',	'arctic',	'cat',	'crab',	'beach',	'city',	'rat',	'cat',	'owl',	'snake',	'dog',	'desert',	'zoo',	'city',	'crab',	'snake',	'rainforest',	'arctic',	'rainforest',	'snake',	'arctic',	'arctic',	'dog',	'rat',	'cat',	'beach',	'owl',	'giraffe',	'cat',	'arctic',	'rat',	'cat'],
		column3: ['rainforest',	'giraffe',	'giraffe',	'horse',	'owl',	'rat',	'city',	'giraffe',	'city',	'rat',	'horse',	'horse',	'crab',	'arctic',	'giraffe',	'dog',	'giraffe',	'dog',	'snake',	'owl',	'crab',	'horse',	'horse',	'crab',	'horse',	'alligator',	'giraffe',	'dog',	'rainforest',	'pig',	'horse',	'horse',	'cat',	'zoo',	'alligator',	'city',	'alligator',	'giraffe',	'crab',	'horse',	'alligator',	'horse',	'alligator',	'city',	'horse',	'crab',	'horse',	'alligator',	'dog',	'giraffe',	'horse',	'crab',	'crab',	'giraffe',	'pig',	'dog',	'giraffe',	'dog',	'dog',	'owl',	'cat',	'horse',	'dog',	'owl',	'horse',	'owl',	'dog',	'horse',	'alligator',	'crab',	'alligator',	'dog',	'owl',	'horse',	'rainforest',	'alligator',	'horse',	'alligator',	'crab',	'crab',	'city',	'pig',	'rat',	'horse',	'snake',	'alligator',	'cat',	'rat',	'crab',	'snake',	'alligator',	'crab',	'horse',	'owl',	'pig',	'rat',	'horse',	'horse',	'giraffe',	'rat',	'giraffe',	'giraffe',	'snake',	'giraffe',	'giraffe',	'alligator',	'alligator',	'pig',	'giraffe',	'alligator',	'horse',	'crab',	'giraffe',	'horse']
	}