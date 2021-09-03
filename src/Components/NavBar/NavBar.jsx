import React from 'react';
import { Link } from 'react-router-dom';

// display navbar based on user login status
const NavBar = ({user}) => {
    return (
        <div>
            <Link to='/'><h4>Shamazon.com</h4></Link>
            <ul>
                <li>
                    <Link to='/search'>SearchPage</Link>
                </li>
                {!user &&
                    <React.Fragment>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </React.Fragment>
                }
            </ul>
        </div>
    )
}

export default NavBar;