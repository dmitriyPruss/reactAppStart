import React, { Component } from 'react';
import styles from './UserListItemHW.module.css';

export default function UserHW (props) {
    const { 
        info: {id, firstName, lastName, age, imgSrc, imgThumbUp, likesCount, bin, heart}, 
        handlers: {addLike, clickElement, deleteElement}, 
    } = props;

    return (
        <li>
            <div onClick={clickElement}>
                <h2>{firstName} {lastName}</h2>  
                <span id={id} hidden></span>
                <p>Age: {age}</p>
                <img className={styles.photo} src={imgSrc} alt="userPhoto" width={320} height={270}/>
                <div className={styles.heartContainer}>
                    <img src={heart} width={55} alt="heart" />
                    <span>{likesCount}</span>
                </div>
            </div>
            <img onClick={addLike} className={styles.thumbUp} src={imgThumbUp} width={45} alt="up" />
            <img onClick={deleteElement} className={styles.bin} src={bin} width={45} alt="up" />
        </li>
    );
};

