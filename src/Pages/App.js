import React, { Component } from 'react';
import './App.css';
import Premium from '../Containers/Premium'
import {BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom'
import Help from '../Containers/Help'
import Download from '../Containers/Download'
import HomePage from '../Containers/HomePage'
import Login from '../Containers/Login'
import SignUp from '../Containers/SignUp'
class App extends Component{
  render(){
      return(
        <Router>
            <Switch>
                <Route  path='/Help'>
                    <Help></Help>
                </Route>
                <Route  path='/Premium'>
                    <Premium></Premium>
                </Route>
                {/* <Route exact path='/'>
                    <Premium></Premium>
                </Route> */}
                <Route  path='/Download'>
                    <Download></Download>
                </Route>
                <Route  path='/SignUp'>
                   <SignUp></SignUp>
                </Route>
                <Route  path='/Login'>
                    <Login></Login>
                </Route>
                <Route exact path='/'>
                    <HomePage></HomePage>
                </Route>
            </Switch>    
        </Router>
      )
  }
}

export default App;

