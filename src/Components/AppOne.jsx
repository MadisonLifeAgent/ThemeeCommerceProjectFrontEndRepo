// React Imports
import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

// component imports
import NavBar from './NavBar/NavBar';
import LoginForm from './LoginForm/LoginForm';
import Search from './Search/Search';
import ListProduct from './ListProduct/ListProduct';
import RegisterForm from './Register/RegisterForm';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import DisplaySearchResults from './DisplaySearchResults/DisplaySearchResults';



class AppOne extends Component {
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

  // this function post the user login credentials
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
                      return <Search {...props} user={this.state.user} getSearchResults={this.getSearchResults} getProductRatingReview={this.getProductRatingReview} /> }}} />
                <Route path='/login' render={props => { return <LoginForm {...props} makeLoginRequest={this.makeLoginRequest} /> }} />

                <Route path='/add' component={ListProduct} />
                <Route path='/register' component={RegisterForm} />
                <Route path='/shoppingcart'  render={props => {
                  return <ShoppingCart {...props} user={this.state.user} />
                }} />
                <Route path='/searchresults' component={DisplaySearchResults} />
              </Switch>
            </div>
        </div>
       );
    }
}
  
  export default AppOne;