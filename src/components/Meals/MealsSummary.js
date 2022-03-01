import Styles from './MealsSummary.module.css';

const MealsSummary = () => {
    return <section className={Styles.summary}>
        <h2>Delicious Food, Just For You!</h2>
        <p>
            Choose your yummy meal from our delicious selection of meals and enjoy.
        </p>
        <p>
            All our meals are cooked with high quality ingredients, and with love.
        </p>
    </section>
}

export default MealsSummary;