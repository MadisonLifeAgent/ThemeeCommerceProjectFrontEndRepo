// react imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';


// this hook gets the current user info
const GetCurrentUser = (localStorage) => {
    // used to store userinfo
    const [user, setUser] = useState({});

    const jwt = localStorage.getItem('token');

    // get user info - which we can actually use for rendering on the front end
    async function getUser() {
        const response = await axios.get('https://localhost:44394/api/examples/user', { headers: {Authorization: 'Bearer ' + jwt}});

        if (response.data) {
            console.log("current user");
            console.log(response.data);

            setUser(response.data);
        }
        else {
            console.log("bad call");
        }
    }

    // start getting the data as soon as this hook is called
    useEffect(() => {
        getUser(localStorage)
    },)

    return {user};
}

export default GetCurrentUser;