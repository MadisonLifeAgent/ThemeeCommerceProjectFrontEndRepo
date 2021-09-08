// react imports
import React from 'react';

//component imports
import GetCurrentUser from '../../Hooks/GetCurrentUser';


const ProfileScreenPage = (user) => {
        return (
            <div>
                <h3>Profile Screen: {user.username}</h3>
            </div>
        )



}

export default ProfileScreenPage;