import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose}>

    </div>
};

const ModalOverlay = props => {
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>
}

const overlayDiv = document.getElementById('overlay')

export default function Modal(props){
    

    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, overlayDiv)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlayDiv)}
    </React.Fragment>
}