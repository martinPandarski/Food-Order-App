import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

export default function Cart(props) {
  const [showCheckout, setShowCheckout] = useState(false)
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id)
  };

  const cartItemAddHandler = (item) => {
    cartContext.addItem({...item, amount: 1})
  };

  const orderHandler = () => {
    setShowCheckout(true)
  }

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckout ? <Checkout onCancel={props.onClose}/> : 
          <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button className={styles.button} onClick={orderHandler} >Order</button>}
        </div>
         }
    </Modal>
  );
}
