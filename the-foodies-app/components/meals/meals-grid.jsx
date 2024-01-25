import MealItem from './meal-item';
import styes from './meals-grid.module.scss';
export default function MealsGrid({meals}) {
    return (
        <ul className={styes.meals}>
            {meals.map(meal => (
                <li key={meal.id}><MealItem {...meal}/> </li>
            ))}
        </ul>
    );
}