import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import Styles from './Header.module.css';

const Header = props => {
    return <React.Fragment>
        <header className={Styles.header}>
        <h1>RottiMeals</h1>
        <button>Cart</button>
        </header>

        <div className={Styles['main-image']}>
        <img src={mealsImage} alt="MealsImage"/>
        </div>
    </React.Fragment>

};

export default Header;