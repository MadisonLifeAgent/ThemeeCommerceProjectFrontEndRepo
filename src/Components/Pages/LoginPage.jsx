// react imports
import React, { useState } from 'react';

// import the login from
import LoginForm from '../LoginForm/LoginForm';
import GetCurrentUser from '../../Hooks/GetCurrentUser';


// this component displays the login form and posts to backend
const LoginPage = (props) => {
    // login credentials will be stored here and sent in axios request
    const [username, setUsername] = useState({});
    const [password, setPassword] = useState({});



    // gets the login form info once submitted
    const loginUser = (username, password) => {
        setUsername(username);
        setPassword(password);

    }
    // call login hook and pass user credentials to login
    //const localStorage = LoginForm(username, password);

    //display login form
    return (
        <div>
            <h3>Login to Start Shopping!</h3>
            <LoginForm loginUser={loginUser} />
        </div>
    );
}

export default LoginPage;