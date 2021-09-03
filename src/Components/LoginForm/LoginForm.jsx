import React, { Component } from 'react';
import axios from 'axios';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '', 
            password: ''
         }
    }
    
    async makeLoginRequest(logInfo){
        try{

            let userInfo = logInfo;
            let response = await axios.post('https://localhost:44394/api/authentication/login', userInfo);
            // set token
            localStorage.setItem('token', response.data.token);
            window.location = '/';
            return localStorage;
        }
        catch(ex){
            console.log("bad call");
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.makeLoginRequest(this.state)
    };
        

    render() { 
        return ( 
            <div>
            <h3>Login to Shop</h3>
            <form onSubmit={this.handleSubmit}>
                 <input name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange} />

                 <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />

             <input type="submit" value="Submit" className="btn btn-secondary mb-3" />
         </form>
         </div>

         );
    }
}
 
export default LoginForm;