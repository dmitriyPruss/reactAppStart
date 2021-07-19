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
            isCursorOver: false,
        }
    }

    handleNameChange = ( { target: {value} } ) => {
        this.setState({ 
            userName: value,
            isNameValid: /^([A-Z][a-z]{1,19})$/.test(value),
        });
    }

    handleEmailChange = ( { target: {value} } ) => {
        this.setState({ 
            userEmail: value,
            isEmailValid: /^([\w]{1,20}@[a-z]{4,5}\.[a-z]{3}(\.[a-z]{2,3})?)$/.test(value),
        });
    }

    handlePasswordChange = ( { target: {value} } ) => {
        this.setState({ 
            userPassword: value,
            isPasswordValid: /^\S{8,12}$/.test(value),
        });
    }

    handleFocus = e => this.visualHandler('isOnFocus');
    handleBlur = e => this.visualHandler('isOnFocus');

    handleMouseOver = e => this.visualHandler('isCursorOver');
    handleMouseOut = e => this.visualHandler('isCursorOver');

    visualHandler(name) {
        this.setState( state => ( {[name]: !state[name]} ) );
    }

    submitHandler = e => {
        e.preventDefault();
    }

    render() {

        const { userName, isNameValid, userEmail, isEmailValid, userPassword, isPasswordValid, isOnFocus, isCursorOver } = this.state;

        const userNameClassName = classNames( styles.userName, {
            [isNameValid ? styles.valid : styles.invalid]: userName,
        });

        const userEmailClassName = classNames( styles.emailInput, {
            [isEmailValid ? styles.valid : styles.invalid]: userEmail,
        });

        const userPasswordClassName = classNames( styles.password, {
            [isPasswordValid ? styles.valid : styles.invalid]: userPassword,
            [styles.onFocus]: isOnFocus,
        });

        const buttonClassName = classNames( styles.submitButton, {
            [styles.cursorOver]: isCursorOver,
        });

        return (
            <form className={styles.container} onSubmit={this.submitHandler}>
                <h2 className={styles.header}>Sign Up Form</h2>
                <section className={styles.mainContent}>
                    <div className={styles.formBlock1}>
                        <label className={styles.nameLabel} htmlFor="name">Name</label>
                        <label className={styles.emailLabel} htmlFor="email">Email</label>
                        <label className={styles.passwordLabel} htmlFor="password">Password</label>
                    </div>
                    <div className={styles.formBlock2}>
                        <input
                            className={userNameClassName} 
                            type="text"
                            id='name' 
                            placeholder='Name...'
                            value={userName}
                            autoFocus
                            maxLength={20}
                            onChange={this.handleNameChange}
                        />
                        <input
                            className={userEmailClassName} 
                            type="email"
                            id='email'  
                            placeholder='Email...'
                            value={userEmail}
                            maxLength={35}
                            onChange={this.handleEmailChange}
                        />
                        <input
                            className={userPasswordClassName} 
                            type="password"
                            id="password" 
                            placeholder='Password...'
                            value={userPassword}
                            maxLength={12}
                            onChange={this.handlePasswordChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                        />
                    </div>
                </section>
                <div className={styles.button}>
                    <input className={buttonClassName} type="submit" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} value="SIGN UP" />
                </div>
            </form>
        )
    }
}
