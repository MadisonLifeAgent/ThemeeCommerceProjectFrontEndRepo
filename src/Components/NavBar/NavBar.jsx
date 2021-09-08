import React from 'react';
import { Link } from 'react-router-dom';

import Logout from '../Logout/Logout';
import './NavBar.css';

// display navbar based on user login status
const NavBar = ({user}) => {
    return (
        <div class="p-2">
{/*     {user && <h3>Welcome {user.username}</h3>}
 */}
            <dl class="nav nav-tabs">
            {!user &&
                    <React.Fragment>
                        <dd class="nav-item">
                            <Link to="/login" class="nav-link active">Login</Link>
                        </dd>
                        <dd class="nav-item">
                            <Link to="/register" class="nav-link active">Register</Link>
                        </dd>
                    </React.Fragment>
                }
                {user &&
                    <React.Fragment>
                        <dd class="nav-item">
                            <Link to='/add' class="nav-link active">Add Product</Link>
                        </dd>
                        <dd class="nav-item">
                            <Link to='/shoppingcart' class="nav-link active">Shopping Cart</Link>
                        </dd>
                        <dd class="nav-item">
                            <Link to='/profile' class="nav-link active">My Profile</Link>
                        </dd>
                        <dd class="nav-item">
                            <Logout />
                        </dd>
                    </React.Fragment>
                }
                
            </dl>
        </div>
    )
}

export default NavBar;