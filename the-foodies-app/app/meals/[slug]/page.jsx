import { getMeal } from '@/lib/meals';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.scss'
export default async function MealPage({params}) {
    const  meal = await getMeal(params.slug);
    if (!meal) {
     notFound();
    }
    meal.instructions = meal.instructions.replace(/\n/g, '<br />');
    return (
        <>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image src={meal.image} alt={meal.title} fill />
                </div>
                <div className={styles.headerText}>
                    <h1>{meal.title}</h1>
                    <p>
                    by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={styles.summery}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={styles.instructions} dangerouslySetInnerHTML={{__html: meal.instructions}}></p>
            </main>
        </>
    );
}