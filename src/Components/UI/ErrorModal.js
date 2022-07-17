import React from 'react'
import Card from './Card'
import Button from './Button'
import ReactDOM  from 'react-dom'

import styles from './ErrorModal.module.css'

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClick}/>
}
const ModalOverlay = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onClick}>Gotcha!</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <ModalOverlay 
                    title={props.title} 
                    onClick={props.abortErrorModal} 
                    message={props.message} 
                />, 
                document.getElementById('overlay-root')
            )}
            {ReactDOM.createPortal(
                <Backdrop 
                    onClick={props.abortErrorModal} 
                />, 
                document.getElementById('backdrop-root')
            )}
        </React.Fragment>
    )
}
export default ErrorModal