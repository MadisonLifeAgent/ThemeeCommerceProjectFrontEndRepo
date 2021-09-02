import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: {},
/*             username: '', 
            password: '' */
         }
    }

    componentDidMount() {
        const jwt = localStorage.getItem('token');
        try{
          const user = jwt_decode(jwt);
          this.setState({
            user
          });
        } catch {
        
        }
    }
    
    async makeLoginRequest(){
        try{

            let formData = {username: this.state.username, password: this.state.password}
            let response = await axios.post('https://localhost:44394/api/authentication/login', formData);
            // set token
            localStorage.setItem('token', response.data);
        }
        catch(ex){
            console.log(ex);
        }
        debugger;
        console.log(this.state.user);
    }


    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        //event.preventDefault();
        this.makeLoginRequest()
    };
        

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
            <div>
                 <input name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange} />

                 <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
             </div>

             <input type="submit" value="Submit" className="btn btn-secondary mb-3" />
         </form>
         );
    }
}
 
export default LoginForm;






// This form is for adding new comments
// const LoginForm = ({ makeLoginRequest }) => {
//     const [username, setUsername] = useState();
//     const [password, setPassword] = useState();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         makeLoginRequest(username, password);
//         //setUser('');
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />

//                 <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
//             </div>

//             <input type="submit" value="Submit Comment" className="btn btn-secondary mb-3" />
//         </form>
//     )
// }

// export default LoginForm;