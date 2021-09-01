import React, {useState, useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import reactDom from 'react-dom'
import Home from './Home'


function App(){
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomeFunction} />
      </Switch>
    </div>
  );
}

// Will become the home page for the app
const HomeFunction = () => (
    <Fragment>
      <div class="container-fluid">
        <Home />
      </div>
    </Fragment>
  )



  export default App;