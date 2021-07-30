import React from 'react';

import mealsPhoto from "../../assets/meals.jpg"
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


export default function Header(props){


    return (
    <React.Fragment>
        <header className={styles.header}>
            <h1>Meals</h1>
            <HeaderCartButton/>
        </header>
        <div className={styles['main-image']}>
            <img src={mealsPhoto} alt='meals'/>
        </div>
    </React.Fragment>
    )
}