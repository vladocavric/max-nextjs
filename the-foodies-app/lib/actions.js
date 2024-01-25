'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

function isInvalidText(text) {
	if (!text || text.trim() === '') {
		return true;
	}
}

export async function shareMeal(prevState ,formData) {
	const meal = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
		creator: formData.get('name'),
		creator_email: formData.get('email'),
	};

	if (
		isInvalidText(meal.title) ||
		isInvalidText(meal.summary) ||
		isInvalidText(meal.instructions) ||
		isInvalidText(meal.creator) ||
		isInvalidText(meal.creator_email) ||
		!meal.image ||
		meal.image.size === 0 ||
    	!meal.creator_email.includes('@')
	) {
		// throw new Error('There is an invalid field');
    return {message: 'There is an invalid field'}
	}

	await saveMeal(meal);
	revalidatePath('/meals');
	// revalidatePath('/meals', 'layout')
	// layout attribute is optional, and it revalidate all nested pages
	redirect('/meals');
}
