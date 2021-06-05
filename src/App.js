import React from 'react'
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Approval from './components/approvals/Approval';
import history from './components/history';
import { Jumbotron } from 'react-bootstrap';

function App() {
  return (
    <div>
        <BrowserRouter history={history}>
          <Header />
          <Jumbotron style={{
            backgroundColor: "#ffffff"
          }}> 
            <Switch >
              <Route 
                exact
                path="/home"
                component={Home}
              />
              <Route 
                exact
                path="/approval"
                component={Approval}
              />
              <Redirect from="*" to="/home" />
            </Switch>
          </Jumbotron>
        </BrowserRouter>
    </div>
  );
}

export default App;
