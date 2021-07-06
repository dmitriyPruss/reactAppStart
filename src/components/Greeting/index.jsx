import React, { Fragment } from 'react';

function Greeting(props) {
    const { name, isGreeting, arr } = props;
    return <Fragment>
        <p>{isGreeting ? 'Hello': 'Goodbye'} {name}</p>
        <ul>
            {arr.map(i => <li>{i}</li>)}
        </ul>
    </Fragment>
};



export default Greeting;
