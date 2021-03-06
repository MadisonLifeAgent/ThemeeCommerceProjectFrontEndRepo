import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.js';
import { BrowserRouter as Router } from 'react-router-dom';


// reactDom.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>,
    document.getElementById('root')
);