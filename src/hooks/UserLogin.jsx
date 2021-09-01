import React from 'react';
import axios from 'axios';

// axios call to login user
const UserLogin = (urldata, userInfo) => {
    async function loginUser(url) {
        let response = await axios.post(url, userInfo);

        if (response) {
            console.log("API call is GOOD");
        } else 
        {
            console.log("API call is FAILED");
        }
    }
    loginUser(urldata);
}

export default UserLogin;