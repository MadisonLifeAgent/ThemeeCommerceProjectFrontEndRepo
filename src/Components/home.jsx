import React, { useState } from 'react';

// imported components
import LoginForm from '../components/LoginForm/LoginForm';
//import // login hook

// Home page
const Home = () => {
    // stores login form input from loginform
    const [userLogin, setUser] = useState([]);

    // set userlogin
    debugger;
    const loginInfo = (userLogin) => {
        setUser(userLogin);

        const userInfo = {
            "username": userLogin.username,
            "password": userLogin.password
        }
        // api call
        
        loginInfo('https://localhost:44394/api/authentication/login', userInfo);
    }


    return ( 
        <div>
            <h2>Welcome to Shamazon.com!!!</h2>
            <LoginForm loginInfo={loginInfo} />
        </div>
     );
}
 
export default Home;