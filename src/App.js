import React, { Component } from 'react';
import { Route,Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './home';
import About from './about';
import Contact from './contact';
import Services from './services';
import Loggers from './login';
import Signup from './signup';
import Dashboard from '../src/views/dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/services' component={Services} />
            <Route path='/login' component={Loggers} />
            <Route path='/signup' component={Signup} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </BrowserRouter>


      </div>
    );
  }
}

export default App;
