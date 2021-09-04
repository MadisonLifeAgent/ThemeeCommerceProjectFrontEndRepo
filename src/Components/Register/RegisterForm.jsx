import axios from 'axios';
import React, {Component} from 'react';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            email: '',
            phoneNumber: '',
         }
    }

    async registerRequest(userInfo){
        userInfo = {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            userName: userInfo.userName,
            password: userInfo.password,
            email: userInfo.email,
            phoneNumber: userInfo.phoneNumber
        }
        debugger;
        console.log(userInfo)
        try{
            let response = await axios.post('https://localhost:44394/api/authentication', userInfo)
            console.log(response.data)
        }
        catch(ex){
            console.log("bad call")
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.type === "number"? event.target.valueAsNumber : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.registerRequest(this.state)
    };



    render() { 
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const userName = this.state.userName;
        const password = this.state.password;
        const email = this.state.email;
        const phoneNumber = this.state.phoneNumber;
        return ( 
            <div>
                <h3>Register Here!</h3>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input name="firstName" type="text" placeholder="First Name" value={firstName} onChange={this.handleChange} />
                    <input name="lastName" type="text" placeholder="Last Name" value={lastName} onChange={this.handleChange} />
                    <input name="userName" type="text" placeholder="Username" value={userName} onChange={this.handleChange} />
                    <input name="password" type="password" placeholder="Password" value={password} onChange={this.handleChange} />
                    <input name="email" type="email" placeholder="Email" value={email} onChange={this.handleChange} />
                    <input name="phoneNumber" type="tel" placeholder="Phone Number" value={phoneNumber} onChange={this.handleChange} />
                    <input name="submit" type="Submit" className="btn btn-secondary mb-3" />
                </form>
            </div>
         );
    }
}
 
export default RegisterForm;





