import React from 'react';

const NewUserGreeting = (props) => {
    return <h1>Please sign up!</h1>;
}

const ReturningUserGreeting = (props) => {
    return <h1>Welcome back!</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <ReturningUserGreeting />
    }
    return <NewUserGreeting />
}


export default Greeting;