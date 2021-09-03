// React Imports
import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import NavBar from './NavBar/NavBar';
import LoginForm from './LoginForm/LoginForm';
import Search from './Search/Search.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '', 
        password: ''
      }
  }

  // mount the home page
  componentDidMount() {
    // gets the user token
    const jwt = localStorage.getItem('token');
    //console.log(jwt);
    try{
      const user = jwt_decode(jwt);
      console.log(user);
      this.setState({
        user
      });
    } catch {
    }
  }

    // what renders to the page
    render() { 
      const user = this.state.user;
      return ( 
        <div>
          <NavBar user={user} />
            <div>
              <Switch>
                <Route path ='/search' render={props => {
                  if (!user){
                    return <Redirect to="/login" />
                  } else {
                    return <Search {...props} user={user} />
                  }
                }} /> 
                <Route path='/login' component={LoginForm} props="props" />
                <Route path='/search' component={Search} />
              </Switch>
            </div>
        </div>
       );
    }
  }
  export default App;