import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home'
import Header from './Components/Header'
import SignUp from './Components/SignUp'
import LogIn from './Components/LogIn'
import notFound from './Components/404'
import './App.css';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route component={notFound} />
        </Switch>
     </BrowserRouter>
    );
  }
}

export default App;
