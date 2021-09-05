// React Imports
import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import NavBar from './NavBar/NavBar';
import LoginForm from './LoginForm/LoginForm';
import Search from './Search/Search';
import ListProduct from './ListProduct/ListProduct';
import RegisterForm from './Register/RegisterForm';
import ShoppingCart from './ShoppingCart/ShoppingCart';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      }
  }

  // mount the home page
  componentDidMount() {
    // gets the user token
    const jwt = localStorage.getItem('token');
    try{
      const user = jwt_decode(jwt);
      this.setState({
        user
      });
    } catch {

    }
  }

    // what renders to the page based on login status
    render() { 
      const user = this.state.user;
      return ( 
        <div>
          <NavBar user={user} />
            <div>
              <Switch>
                <Route path='/search'
                  render={props => {
                    if (!user){
                      return <Redirect to="/login" />
                    } else {
                      return <Search {...props} user={this.state.user} />
                    }
                  }}
                />
                <Route path='/login' component={LoginForm} props="props" />
                <Route path='/add' component={ListProduct} />
                <Route path='/register' component={RegisterForm} />
                <Route path='/shoppingcart'  render={props => {
                  return <ShoppingCart {...props} user={this.state.user} />
                }} />
              </Switch>
            </div>
        </div>
       );
    }
  }
  
  export default App;