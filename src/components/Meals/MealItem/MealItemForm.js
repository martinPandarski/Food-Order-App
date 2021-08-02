import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

export default function MealItemForm(props){
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountRef = useRef()
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountRef.current.value;
        const enteredAmountNumber = Number(enteredAmount);
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber)
    }


    return <form className={styles.form} onSubmit={submitHandler}>
        <Input ref={amountRef} label="Amount" input={{id: "amount_" + props.id, type: "number", min: "1", max: "5", step: "1", defaultValue: "1"}}/>
        <button>Add</button>
        {!amountIsValid && <p>Enter valid amount.</p>}
    </form>
}