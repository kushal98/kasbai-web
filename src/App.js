import React from 'react'
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Approval from './components/approvals/Approval';
import UserManagement from './components/user-management/UserManagement';
import Profile from './components/profile/Profile';
import history from './components/history';

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
              <Route 
                exact
                path="/user-management"
                component={UserManagement}
              />
              <Route 
                exact
                path="/profile"
                component={Profile}
              />
              <Redirect from="*" to="/home" />
            </Switch>
          </Jumbotron>
        </BrowserRouter>
    </div>
  );
}

export default App;
