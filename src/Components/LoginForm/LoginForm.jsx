import React, { useState } from 'react';

// This form is for adding new comments
const LoginForm = ({ makeLoginRequest }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        makeLoginRequest(username, password);
        //setUser('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />

                <input type="text" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>

            <input type="submit" value="Submit Comment" className="btn btn-secondary mb-3" />
        </form>
    )
}

export default LoginForm;