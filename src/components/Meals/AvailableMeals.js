import Card from '../UI/Card';
import Styles from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'croissant',
      description: ' Buttery, flaky, viennoiserie pastry',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Oatmeal',
      description: 'Dessert for breakfast',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Buddha Bowl',
      description: 'Rice or whole grains, roasted veggies, a dressing and protein ',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>)

    return <section className={Styles.meals}>
        <Card>{mealsList}</Card>
    </section>
};

export default AvailableMeals;