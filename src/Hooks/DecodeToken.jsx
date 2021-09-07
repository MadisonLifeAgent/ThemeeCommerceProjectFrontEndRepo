//react imports
import React from "react";
import jwt_decode from 'jwt-decode';



// this hook decodes the token and returns it
const DecodeToken = (tokenData) => {
    if ('token') {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwt_decode(jwt);
            return user;
        } catch (ex) {

        }

    }
}

export default DecodeToken;