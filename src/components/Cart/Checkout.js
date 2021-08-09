import { useRef, useState } from 'react';
import styles from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isNotValid = (value) => value.trim().length !== 4;


const Checkout = (props) => {
    const [formInputs, setFormInputs] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })


    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postCodeInputRef = useRef()
    const cityInputRef = useRef()
    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const streetName = streetInputRef.current.value;
        const postCodeName = postCodeInputRef.current.value;
        const cityName = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(streetName);
        const enteredCityIsValid = !isEmpty(cityName);
        const postCodeIsValid = !isNotValid(postCodeName);

        setFormInputs({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: postCodeIsValid
        })

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && postCodeIsValid;
        if(!formIsValid){
            return;
        }
    };

    return (
        <form className={styles.form} onSubmit={confirmHandler}>
            <div className={`${styles.control} ${formInputs.name ? '' : styles.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputs.name && <p>Please enter a valid name.</p>}
            </div>
            <div className={`${styles.control} ${formInputs.street ? '' : styles.invalid}`}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formInputs.street && <p>Please enter a valid street.</p>}
            </div>
            <div className={`${styles.control} ${formInputs.postalCode ? '' : styles.invalid}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postCodeInputRef} />
                {!formInputs.postalCode && <p>Please enter a valid postal code.</p>}
            </div>
            <div className={`${styles.control} ${formInputs.city ? '' : styles.invalid}`}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputs.city && <p>Please enter a valid city.</p>}
            </div>
            <div className={styles.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={styles.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;