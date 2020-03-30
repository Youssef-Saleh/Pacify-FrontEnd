import React, { Component } from 'react';
import './App.css';
import Premium from '../Containers/Premium'
import {BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom'
import Help from '../Containers/Help'
import Download from '../Containers/Download'
import HomePage from '../Containers/HomePage'
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
                <Route  path='/HomePage'>
                    <HomePage></HomePage>
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

