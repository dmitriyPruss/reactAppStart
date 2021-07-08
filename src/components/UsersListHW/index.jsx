import React, { Component } from 'react';
import UserListItemHW from '../UserListItemHW';
import dbUsers from './dbUsers.js';
import styles from './../UserListItemHW/UserListItemHW.module.css';

export default class UsersListHW extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            users: dbUsers,
        };
    };
    
    addLike = ( { target } ) => {

        const [targetId, newUsers] = this.getUsers( {target} );
       
        newUsers.map( (newUser, index) => {
            if (targetId === newUser.id) {
                newUser.likesCount++;

                this.setState( state => 
                    state.users[index].likesCount = newUser.likesCount  
                );
            };
        });
    }

    clickElement = ( { target } ) => {

        const [targetId, newUsers] = this.getUsers( {target} );

        newUsers.map( newUser => {
            if (targetId === newUser.id) {
                if(target.tagName !== 'li') {
                    target = target.closest('li');
                };
                                
                target.classList.toggle(styles.clickedElement);
            };
        });
    }

    deleteElement = ( { target } ) => {

        const [targetId, newUsers] = this.getUsers( {target} );

        newUsers.map( (newUser, index) => {
            if (targetId === newUser.id) {
                if(target.tagName !== 'li') {
                    target = target.closest('li');
                };

                const promise = new Promise( response => {
                    target.classList.add(styles.deletedElem);
                    setTimeout( () => response(target), 220);
                });
            
                promise.then( () => {
                    newUsers.splice(index, 1);
                    this.setState({users: newUsers});
                });
            };
        });
    }

    getUsers( {target} ) {
        const targetId = +target.parentElement.querySelector("span").getAttribute('id');
        const { users } = this.state;
        const newUsers = [...users];

        return [targetId, newUsers];
    }

    render() {
        const { users } = this.state;

        const handlers = {};

        for(const key in this) {
            if (typeof this[key] === 'function' && key !== 'setState' 
            && key !== 'forceUpdate') {
                handlers[key] = this[key];
            }
        };

        return (
            <ul>
                {users.map(user => 
                    <UserListItemHW key={user.id} info={user} handlers={handlers}/>
                )}
            </ul>
        )
    }
}
