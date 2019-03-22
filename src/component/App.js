import React from 'react';
import './App.css';
import Home from './Home.js';
import Nav from './Nav.js';
import Project from './Project.js';
import {BrowserRouter as Router, Route} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav/>
            <Route exact path='' component={Home}/>
            <Route exact path="/p/:id" component={Project}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
