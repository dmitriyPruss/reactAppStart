import React, { Component } from 'react';
import styles from './UserListItemHW.module.css';

export default function UserListItemHW (props) {
    const { 
        info: { id, firstName, lastName, age, imgSrc, likesCount, isSelected, isDeleted, },
        imgDetails: { imgThumbUp, bin, heart, }, 
        handlers: { addLike, clickElement, deleteElement, }, 
    } = props;

    function renderItemClasses() {
        return isSelected ? `${styles.listItem} ${styles.clickedElement}` : isDeleted
        ? `${styles.listItem} ${styles.deletedElement}` : styles.listItem;
    }  

    return (
        <li className={ renderItemClasses() }>
            <div className={styles.content} onClick={clickElement}>
                <h2 className={styles.header}>{firstName} {lastName}</h2>  
                <p className={styles.age}>Age: {age}</p>
                <img className={styles.photo} src={imgSrc} alt="userPhoto" width={320} height={270}/>
                <div className={styles.heartContainer}>
                    <img src={heart} width={55} alt="heart" />
                    <span className={styles.likesCounter}>{likesCount}</span>
                </div>
            </div>
            <img className={styles.thumbUp} src={imgThumbUp} width={45} alt="up" onClick={addLike}  />
            <img className={styles.bin} src={bin} width={45} onClick={deleteElement}  alt="up" />
        </li>
    );
};

