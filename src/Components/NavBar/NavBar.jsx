import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <nav>
            <Link to='/'>
                <button>Shamazon.com</button>
            </Link>
        </nav>
    )
}

export default NavBar;