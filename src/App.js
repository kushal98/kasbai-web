import React, { useState } from 'react'
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import { ScrollTop } from 'primereact/scrolltop';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Donor from './components/donor/Donor';
import Approval from './components/approvals/Approval';
import UserManagement from './components/user-management/UserManagement';
import FormPage from './components/form/FormPage';
import Profile from './components/profile/Profile';
import history from './components/history';

function App() {

  const [authenticated , setAuthenticate] = useState(false)

  return (
    <div>
        <BrowserRouter history={history}>
          <ScrollTop />
          <Header loggedIn={authenticated} setLoginTrue={setAuthenticate} />
          <Jumbotron style={{
            backgroundColor: "#ffffff"
          }}> 
            <Switch >
              {
                !authenticated?
                <>
                  <Route 
                    exact
                    path="/home"
                    component={Home}
                  />
                  <Redirect from="*" to="/home" />
                </>
                :
                <>
                  <Route 
                    exact
                    path="/home"
                    component={Home}
                  />
                  <Route 
                    exact
                    path="/donor"
                    component={Donor}
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
                    path="/forms"
                    component={FormPage}
                  />
                  <Route 
                    exact
                    path="/profile"
                    component={Profile}
                  />
                  <Redirect from="*" to="/home" />
                </>
              }
            </Switch>
          </Jumbotron>
        </BrowserRouter>
    </div>
  );
}

export default App;
