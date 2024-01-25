import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';


import fs from 'node:fs';

const db = sql('meals.db');

export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	// throw new Error('Something went wrong')
	return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug) {
	return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	const extension = meal.image.name.split('.').pop();
	const dateString = new Date().getTime();
	const fileName = `${meal.slug}${dateString}.${extension}`;

	const stream = fs.createWriteStream(`public/images/${fileName}`);
	const bufferedImage = await meal.image.arrayBuffer();
	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			throw new Error('Saving image failed');
		}
	});

	meal.image = `/images/${fileName}`;

	db.prepare(
		`
        INSERT INTO meals
        (title, summary, instructions, image, creator, creator_email, slug)
        VALUES
        (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)
    `
	).run(meal);
}
