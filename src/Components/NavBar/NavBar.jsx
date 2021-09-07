import React from 'react';
import { Link } from 'react-router-dom';

import Logout from '../Logout/Logout';

// display navbar based on user login status
const NavBar = ({user}) => {
    return (
        <div>
{/*     {user && <h3>Welcome {user.username}</h3>}
 */}        <button>
                <Link to='/'>
                    <h2>Shamazon.com</h2>
                </Link>
            </button>
            <dl>
            {!user &&
                    <React.Fragment>
                        <dd>
                            <Link to="/login">Login</Link>
                        </dd>
                        <dd>
                            <Link to="/register">Register</Link>
                        </dd>
                    </React.Fragment>
                }
                {user &&
                    <React.Fragment>
                        <dd>
                            <Link to='/add'>List Product</Link>
                        </dd>
                        <dd>
                            <Link to='/shoppingcart'>Shopping Cart</Link>
                        </dd>
                        <dd>
                            <Link to='/profile'>My Profile</Link>
                        </dd>
                        <dd>
                            <Logout />
                        </dd>
                    </React.Fragment>
                }
                
            </dl>
        </div>
    )
}

export default NavBar;


{/* <dd>
<Link to='/search'>SearchPage</Link>
</dd> */}