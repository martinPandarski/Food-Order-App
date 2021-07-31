import styles from "./Cart.module.css";

export default function Cart(props) {
  const cartItems = <ul className={styles["cart-items"]}>{[{ id: "2", name: "Ivan ", amount: 5, price: 12.22 }].map(item => <li>{item.name}</li>)}</ul>;

  return (
    <div>
        {cartItems}
      <div className={styles.total}>
          <span>Total Amount</span>
          <span>23</span>
      </div>
      <div className={styles.action}>
          <button className={styles["button--alt"]}>Close</button>
          <button className={styles.button}>Order</button>
      </div>
    </div>
  );
}
