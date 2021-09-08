//react imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

// componenent imports
import ProfileScreenPage from '../Components/Pages/ProfileScreenPage';


// this component logs in the user, decodes the token and returns user info
const LoginUser = (username, password) => {
    const userCreds = {
        username: username,
        password: password,
    }

    // login the user by passing in their login credentials
    async function makeLoginRequst(userCredentials) {
        let response = await axios.post('https://localhost:44394/api/authentication/login', userCredentials);

        if (response) {
            // store the token in the browser
            localStorage.setItem('token', response.data.token);
            console.log("good login");
            console.log(response.data.token);
            window.location = '/profile';
            return localStorage;
        } else {
            console.log("bad api call");
        }

    }

   
    // start posting the user info as soon as hook is called
    makeLoginRequst(userCreds);
}

export default LoginUser;