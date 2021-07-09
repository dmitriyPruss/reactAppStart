import React, { Component } from 'react';
import UserListItemHW from '../UserListItemHW';
import {dbUsers, imgDetails} from './dbUsers.js';
import styles from './../UserListItemHW/UserListItemHW.module.css';

export default class UsersListHW extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            users: dbUsers.map(dbUser => ( {...dbUser, likesCount: 0} ) ),
        };
    };

    setUsers = newUsers => {
        this.setState({users: newUsers});
    };


    listItems = (user, index) => {

        const { users } = this.state;

        const addLike = () => {
            const newUsers = [...users];
            newUsers[index].likesCount++;
            this.setUsers(newUsers);      
        }; 

        const clickElement = () => {
            const newUsers = [...users];

            newUsers[index].className = styles.clickedElement;
            this.setUsers(newUsers);
        };

        const deleteElement = () => {
    
            const newUsers = [...users];

            // const promise = new Promise( response => {
            //     target.classList.add(styles.deletedElem);
            //     setTimeout( () => response(target), 220);
            // });
                        
            // promise.then( () => {
            //     newUsers.splice(index, 1);
            //     this.setState({users: newUsers});
            // });
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
            <ul>
                {users.map(this.listItems)}
            </ul>
        )
    }
}
