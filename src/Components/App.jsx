// React Imports
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import NavBar from './NavBar/NavBar';
import axios from 'axios';
import LoginForm from './LoginForm/LoginForm';
import Search from './Search/Search';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
          user: ''
      }
  }

  componentDidMount() {
    const jwt = localStorage.getItem('token');
    try{
      const user = jwt_decode(jwt);
      this.setState({
        user
      });
    } catch {
    
    }
  }
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
              }}
            /> 
              <Route path='/login' component={LoginForm} />
              <Route path='/search' component={Search} />
            </Switch>
          </div>
        </div>
       );
    }
  }
  export default App;
  
  

  




// const App = () => {
//   const [user, setUser] = useState({})
  
  
//   useEffect(() => {
//     const jwt = localStorage.getItem('token');
//     try {
//       const user = jwtDecode(jwt);
//       setUser(user)
//     } catch (error) {
      
//     }
//   },[])
  
//   const getCurrentUser = async () => {
//     const jwt = localStorage.getItem('token');
//     const response = await axios.get('https://localhost:44394/api/examples/user', {headers : {Authorization: 'Bearer ' + jwt}});
//     console.log(response.data);
//   }
  
  
//   return (
//     // Routing to pages
//     <div className="App">
//       <NavBar user = {user} />
//         <Switch>
//           <Route path="/" exact component={HomeFunction} />
//         </Switch>
//     </div>
//   );
// }

// calls home page
// const HomeFunction = () => (
//     <Fragment>
//       <div class="container-fluid">
//         <Homepage getCurrentUser = {getCurrentUser}/>
//       </div>
//     </Fragment>
//   )



