//react imports
import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// component imports
import LoginUser from '../../Hooks/LoginUser';
import GetCurrentUser from '../../Hooks/GetCurrentUser';

// this component gets the user login credentials and makes a post request
const LoginForm = ({ loginUser }) => {
    // form variables
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    // const [user, setUser] = useState({})
    const user = {};

    // stores user input in post request format and send back to login page
    const handleSubmit = (event) => {
        event.preventDefault();

        //loginUser(username, password);
        // login with customHook
        LoginUser(username, password);
        
        // reset the form
        setUserName('');
        setPassword('');

    }

  
    // login form
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" value={username} onChange={(event) => setUserName(event.target.value)} />

                <input name="password" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />

                <input type="submit" value="Login" class="btn btn-primary" />
            </form>
        </div>
    )
}

 
export default LoginForm;