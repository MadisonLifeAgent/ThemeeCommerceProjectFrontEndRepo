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

// stylesheet
import './App.css';




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
                searchTerm: event.target.value
            });
        }

        
/*         const handleSubmit = (event) => {
              event.preventDefault();
          }; onSubmit = {handleSubmit} */


        return (
            <main>
            <div>
                    {/* This is the Navigation bar which contains the Search Tool and calls the navbar componennt*/}
                    <nav id="navbarOnly" class="bg bg-dark">

                    <div class="input-group pt-3">
                    <form class="input-group container-fluid" id="productSearchBar" >
                            <input class="form-control " id="searchbar" type="text" name="searchTerm" placeholder="Search" value={this.state.searchTerm} aria-label="Search by Products" onChange={handleChange} />
                            <div class="input-group-append">
                                <Link to={`/search/${this.state.searchTerm}`}>
                                    <button class="btn btn-outline-secondary fg--search" id="searchButton" type="submit" value="submit">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </Link>
                                </div>           

                        </form>
                        {/* Search Bar */}

                         {/* category Search Bar 
                         <form class="d-flex" >
                            <input class="form-control" id="categorySearchBar" type="text" name="categorySearch" placeholder="CategorySearch" value={this.state.categorySearch} aria-label="categorySearchBar" onChange={handleChange} />
                                <Link to={`/categorySearch/${this.state.categorySearch}`}>
                                    <button id="searchButton" type="submit" value="submit">
                                        Category Search
                                    </button>
                                </Link>
                        </form> */}
                    </div>
                    <Link to='/' class="nav-link active bg bg-dark">
                            <dd id="homeLink" class="text-decoration none nav-link text-white">Shamazon.com</dd>
                        </Link>
                    <NavBar user={user}/>

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