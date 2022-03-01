import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import Styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <React.Fragment>
        <header className={Styles.header}>
        <h1>RottiMeals</h1>
        <HeaderCartButton />
        </header>

        <div className={Styles['main-image']}>
        <img src={mealsImage} alt="MealsImage"/>
        </div>
    </React.Fragment>

};

export default Header;