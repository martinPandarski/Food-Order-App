import React, {useContext} from 'react';
import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/CartContext';

const HeaderCartButton = props => {
    const cartContext = useContext(CartContext);
    const itemsCount = cartContext.items.reduce((currNumber, item) => {
        return currNumber + item.amount
    }, 0);

    return( 
    <button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}><CartIcon/></span>
        <span>Cart</span>
        <span className={styles.badge}>
           {itemsCount}
        </span>
    </button>
    )
}


export default HeaderCartButton