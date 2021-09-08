// react imports
import React, { Fragment, useState, useEffect, Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import axios from 'axios';

// pages
import NavBar from './NavBar/NavBar';
import SearchResultsPage from './Pages/SearchResultsPage';
import LoginPage from './Pages/LoginPage';
import ProfileScreenPage from './Pages/ProfileScreenPage';
import GetCurrentUser from '../Hooks/GetCurrentUser';
import DecodeToken from '../Hooks/DecodeToken';
import jwtDecode from 'jwt-decode';
import RegisterForm from './Register/RegisterForm';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import AddProduct from '../Components/AddProduct/AddProduct';
import ProductPage from './Pages/ProductPage';
import CategorySearch from './Pages/CategorySearch';




// redo of app.jsx using classless components
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            categorySearch: '',
          }
      }
    

    // set the search term from the search bar which will always be at the top of each page
    componentDidMount() {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({
                user
            });
        } catch {
        }
    }

    

    render() {
        const user = this.state.user;

        const handleChange = (event) => {
            this.setState({
                categorySearch: event.target.value
            });
        }

        
/*         const handleSubmit = (event) => {
              event.preventDefault();
          }; onSubmit = {handleSubmit} */


        return (
            <main>
            <div>
                {/* This is the Navigation bar which contains the Search Tool and calls the navbar componennt*/}
                <nav>
                    <div>             
                        {/* Search Bar */}
                        <form class="d-flex" >
                            <input class="form-control" id="searchbar" type="text" name="searchTerm" placeholder="Search" value={this.state.searchTerm} aria-label="Search" onChange={handleChange} />
                                <Link to={`/search/${this.state.searchTerm}`}>
                                    <button id="searchButton" type="submit" value="submit">
                                        Search
                                    </button>
                                </Link>
                        </form>
                         {/* Search Bar */}
                         <form class="d-flex" >
                            <input class="form-control" id="categorySearchBar" type="text" name="categorySearch" placeholder="CategorySearch" value={this.state.categorySearch} aria-label="categorySearchBar" onChange={handleChange} />
                                <Link to={`/categorySearch/${this.state.categorySearch}`}>
                                    <button id="searchButton" type="submit" value="submit">
                                        Category Search
                                    </button>
                                </Link>
                        </form>
                    <NavBar user={user}/>
   
                    </div>
                </nav>

                <Switch>
                    <Route path='/login' component={LoginPage} />
                    <Route path='profile' render={props => { return <ProfileScreenPage {...props} user={user}/> }} />
                    <Route path='/shoppingcart'  render={props => {
                  return <ShoppingCart {...props} user={user} />
                }} />
                    <Route path="/search/:searchTerm" render={props => <SearchResultsPage {...props} searchTerm={this.state.searchTerm} /> } />
                    <Route path='/register' component={RegisterForm} />
                    <Route path='/add' component={AddProduct} />
                    <Route path='/product/:productId' component={ProductPage} user={user}/>
                    <Route path='/CategorySearch/:categorySearch' render={props => <CategorySearch {...props} categorySearch={this.state.categorySearch} /> } />'

                </Switch>

            </div>
        </main>
        )
    }
}

export default App;


{/* <Route path='/shoppingcart'  render={props => {
    return <ShoppingCart {...props} user={this.state.user} />
  }} /> */}