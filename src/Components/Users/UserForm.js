import React, { useState, useRef } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal'

import styles from './UserForm.module.css'

const UserForm = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const name = nameInputRef.current.value;
        const age = ageInputRef.current.value;
        if(name.trim().length === 0){
            setError({
                title: "Wrong Username Format",
                message: "Please Enter a non-empty Username..."
            })
            return;
        }
        if(age.trim().length === 0 || +age < 1){
            setError({
                title: "Wrong Age Input",
                message: "Please Enter a valid Age..."
            })
            return;
        }
        const user = {id: Math.random().toString(), userName: name, userAge: age}
        props.onAddUser(user);
        nameInputRef.current.value = ""
        ageInputRef.current.value = ""
        
    }
    const onAbortErrorModal = () => {
        setError(null);
    }
    return (
        <React.Fragment>
        {error && <ErrorModal title={error.title} message={error.message} abortErrorModal={onAbortErrorModal} />}
        <Card className={styles.input}>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username" >User Name</label>
                <input 
                    type="text" 
                    id='username'  
                    placeholder='Enter Username'
                    ref={nameInputRef}
                /> 
                <label htmlFor="userAge">Age</label>
                <input 
                    type="number" 
                    id='userAge' 
                    placeholder='Enter Age'
                    ref={ageInputRef}
                />
                <div className={styles.btn}><Button type='submit'>Add User</Button></div>
            </form>
        </Card>
    </React.Fragment>
    )
}
export default UserForm;