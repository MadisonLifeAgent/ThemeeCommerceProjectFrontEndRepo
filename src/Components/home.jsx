import React, { useEffect, useState } from 'react';
import axios from 'axios';

// imported components
import LoginForm from './LoginForm/LoginForm';
//import // login hook

// Home page
const Home = (props) => {
    // stores login form input from loginform
    const [userLogin, setUser] = useState([]);

    useEffect(() => {
        makeLoginRequest(props.LoginForm);

    }, [props.LoginForm]);

    const makeLoginRequest = async (userLogin) =>{
        console.log(userLogin)
        let response = await axios.post(`https://localhost:44394/api/authentication/login`, userLogin)
        setUser(response.data)
    }

    // set userlogin
    // debugger;
    // const loginInfo = (userLogin) => {
    //     setUser(userLogin);

    //     const userInfo = {
    //         "username": userLogin.username,
    //         "password": userLogin.password
    //     }
    //     // api call
        
    //     loginInfo('https://localhost:44394/api/authentication/login', userInfo);
    


    return ( 
        <div>
            <h2>Welcome to Shamazon.com!!!</h2>
            <LoginForm makeLoginRequest= {makeLoginRequest} />
        </div>
     );
    
}
export default Home;