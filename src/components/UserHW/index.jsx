import React, { Component } from 'react';

class UserHW extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            id: 1,
            firstName: 'Dimas',
            lastName: 'Henry',
            age: 12,
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU',
            likesCount: 0,
        };
    };

    addLike = () => {
        const { likesCount } = this.state;
        this.setState( {likesCount: likesCount + 1} );
    };
    
    render() {
        const { id, firstName, lastName, age, imgSrc, likesCount } = this.state;

        return (
            <div>
                <span hidden>{id}</span>
                <h2>{firstName} {lastName}</h2>  
                <p>Age: {age}</p>
                <img src={imgSrc} alt="userPhoto" />
                
                <br />
                <button onClick={this.addLike}>+</button>
                <p>Likes: {likesCount}</p>
            </div>
        );
    };
};

export default UserHW;