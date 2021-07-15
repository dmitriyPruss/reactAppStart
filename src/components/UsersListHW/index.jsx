import React, { Component } from 'react';
import UserListItemHW from '../UserListItemHW';
import {dbUsers, imgDetails} from './dbUsers.js';
import styles from './../UserListItemHW/UserListItemHW.module.css';

export default class UsersListHW extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            users: dbUsers.map(dbUser => ( {...dbUser, likesCount: 0, 
            isSelected: false, isDeleted: false, } ) ),
        };
    };

    setUsers = newUsers => {
        this.setState({users: newUsers});
    };

    showListItems = (user, index) => {

        const { users } = this.state;
        const newUsers = [...users];

        const addLike = () => {
            newUsers[index].likesCount++;
            this.setUsers(newUsers);      
        }

        const clickElement = () => {
            newUsers[index].isSelected = !newUsers[index].isSelected;
            this.setUsers(newUsers);
        }

        const deleteElement = () => {

            const promise = new Promise( response => {
                newUsers[index].isSelected = false;
                newUsers[index].isDeleted = !newUsers[index].isDeleted;

                this.setUsers(newUsers);

                setTimeout( () => response(true), 220);
            });
                        
            promise.then( () => {
                newUsers.splice(index, 1);
                this.setUsers(newUsers);
            });
        }

        const handlers = {
            addLike: addLike,
            clickElement: clickElement,
            deleteElement: deleteElement,
        };
    
        return <UserListItemHW key={user.id} info={user} 
        imgDetails={imgDetails} handlers={handlers}/>;
    };

    render() {
        const { users } = this.state;

        return (
            <article className={styles.mainContainer}>
                <ul className={styles.itemsContainer}>
                    {users.map(this.showListItems)}
                </ul>
            </article>
        )
    }
}
