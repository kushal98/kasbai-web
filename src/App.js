import React, { useState } from 'react'
import './App.css';

import {
  Router,
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

import { db } from './config/config'

function App() {

  const auth = localStorage.getItem('auth')
  const type = localStorage.getItem('login-type')

  const [authenticated , setAuthenticate] = useState(auth? auth : false)
  const [loginType, setLoginType] = useState(type? type : '');

  const logData = () => {
    console.log("firestore Data")
    db.collection("Users").get().then((snap) => 
      snap.forEach((doc) => {
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
      })
    )
  }

  return (
    <div>
        <Router history={history}>
          <ScrollTop />
          {logData()}
          <Header loggedIn={authenticated} loginType={loginType} setLoginType={setLoginType} setLoginTrue={setAuthenticate} />
          <Jumbotron style={{
            backgroundColor: "#ffffff"
          }}> 
            <Switch >
              {
                !authenticated?
                <>
                  {console.log("not authenticated")}
                  <Route 
                    exact
                    path="/dashboard"
                    component={Home}
                  />
                  <Redirect from="*" to="/dashboard" />
                </>
                :
                loginType === 'Admin'?
                <>
                  {console.log('history object ', history )}
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
                  {/* <Route 
                    path="*" 
                    component={Home}  
                  /> */}
                </>
                :
                <>
                  <Route 
                    exact
                    path="/donor"
                    component={Donor}
                  />
                  
                  {/* <Route 
                    path="*" 
                    component={Home}  
                  />                */}
                </>
              }
            </Switch>
          </Jumbotron>
        </Router>
    </div>
  );
}

export default App;
