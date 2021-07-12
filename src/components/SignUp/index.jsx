import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './SignUp.module.css';

export default class SignUp extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            userName: '',
            isNameValid: false,

            userEmail: '',
            isEmailValid: false,

            userPassword: '',
            isPasswordValid: false, 

            isOnFocus: false,
        }
    }

    handleNameChange = ( { target: {value} } )  => {
        this.setState( { 
            userName: value,
            isNameValid: /([A-Z][a-z]{1,19})/.test(value),
        } );
    }

    handleEmailChange = ( { target: {value} } )  => {
        this.setState( { 
            userEmail: value,
            isEmailValid: /[\w]{1,19}@[a-z]{4,5}\.[a-z]{3}(\.[a-z]{2,3})?/.test(value),
        } );
    }

    handlePasswordChange = ( { target: {value} } )  => {
        this.setState( { 
            userPassword: value,
            isPasswordValid: /^\S{8,12}$/.test(value),
        } );
    }

    handleFocus = ( { target }) => {
        this.setState( {
            isOnFocus: true,
        })
    }

    handleBlur = ( target ) => {
        this.setState( {
            isOnFocus: false,
        })
    }

    submitHandler = e => {
        e.preventDefault();
        alert('Wow!');
    }

    render() {

        const { userName, isNameValid, userEmail, isEmailValid, userPassword, isPasswordValid, isOnFocus } = this.state;

        const userNameClassName = classNames( styles.userName, {
            [isNameValid ? styles.valid : styles.invalid]: userName,
        } );

        const userEmailClassName = classNames( styles.emailInput, {
            [isEmailValid ? styles.valid : styles.invalid]: userEmail,
        } );

        const userPasswordClassName = classNames( styles.password, {
            [isPasswordValid ? styles.valid : styles.invalid]: userPassword,
            [styles.onFocus]: isOnFocus,
        } );

        return (
            <form className={styles.container} onSubmit={this.submitHandler}>
                <h2 className={styles.header}>Sign Up Form</h2>
                <section className={styles.mainContent}>
                    
                    <div className={styles.formBlock1}>
                        <label htmlFor="name">Name</label>
                        <label htmlFor="email">Email</label>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className={styles.formBlock2}>
                        <div className={styles.fullname}>
                            <input
                                className={userNameClassName} 
                                type="text"
                                id='name' 
                                placeholder='Name...'
                                value={userName}
                                autoFocus
                                maxLength={20}
                                required
                                onChange={this.handleNameChange}
                            />
                        </div>
                        <div className={styles.email}>
                            <input
                                className={userEmailClassName} 
                                type="email"
                                id='email'  
                                placeholder='Email...'
                                value={userEmail}
                                maxLength={35}
                                required
                                onChange={this.handleEmailChange}
                            />
                        </div>
                        <div className={styles.phone}>
                            <input
                                className={userPasswordClassName} 
                                type="password"
                                id="password" 
                                placeholder='Password...'
                                value={userPassword}
                                maxLength={12}
                                required
                                onChange={this.handlePasswordChange}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                            />
                        </div>
                    </div>
                </section>
                <div className={styles.line}>
                    <hr/>
                </div>
                <div className={styles.button}>
                    <input className={styles.submitButton} type="submit" value="SIGN UP" />
                </div>
            </form>
        )
    }
}
