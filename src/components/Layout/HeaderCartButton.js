import React from 'react';
import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = props => {


    return( 
    <button className={styles.button}>
        <span className={styles.icon}><CartIcon/></span>
        <span>Cart</span>
        <span className={styles.badge}>
            0
        </span>
    </button>
    )
}


export default HeaderCartButton