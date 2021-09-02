import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({user}) => {
    return (
        <div>
            {user && <h4> Welcome </h4>}
            <ul>
                <li>
                    <Link to='/search'>SearchPage</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;