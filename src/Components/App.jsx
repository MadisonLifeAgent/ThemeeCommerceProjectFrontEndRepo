// React Imports
import React, {useState, useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import reactDom from 'react-dom'

// Component Imports
import Home from './Home'
import NavBar from './NavBar/NavBar';


function App(){
  return (
    // Routing to pages
    <div className="App">
      <NavBar />
        <Switch>
          <Route path="/" exact component={HomeFunction} />
        </Switch>
    </div>
  );
}

// calls home page
const HomeFunction = () => (
    <Fragment>
      <div class="container-fluid">
        <Home />
      </div>
    </Fragment>
  )



  export default App;