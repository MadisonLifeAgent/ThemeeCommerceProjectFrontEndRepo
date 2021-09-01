import React, {useState, useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "./App.css";
import reactDom from 'react-dom'
import home from './home'


export default function App(){
    let [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
      <Router>
      <main> 
          <nav class="navbar navbar-dark">
              <div>
                  
                      <h1>
                          Ecommerce 
                      </h1>
              </div>
          </nav> 
          <Switch>
          <Route path="/" exact component={Home} />
        </Switch>   
      </main>
  
  </Router>
    )

}

// Will become the home page for the app
const Home = () => (
    <Fragment>
      <div class="container-fluid">
        <home />
      </div>
    </Fragment>
  )