import React from 'react';
import styled from 'styled-components';

import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';
import SingleEvent from './views/SingleEvent';
import LandingPage from './views/LandingPage';
import { NavigationLoggedin, Navigation} from './components/Navigation';

import {Route, Redirect} from 'react-router-dom';


function App() {
  return (
    <AppWrapper>
          <Route 
                exact path="/"
                render={() => {
                   if(localStorage.getItem('userToken')){
                       return(
                         <div>
                        <NavigationLoggedin />
                        </div>
                       );
                   };
                   return (
                    <Navigation />
                  //  <Redirect to='login' />
                   )
                }}
            
            />
            <Route 
                exact path="/dashboard"
                render={() => {
                   if(localStorage.getItem('userToken')){
                       return(
                         <div>
                        <NavigationLoggedin />
                        <Dashboard />
                        </div>
                       );
                   };
                   return (
                   <Redirect to='/' />
                   )
                }}
            
            />
        <Route exact path="/" component={LandingPage} />
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/events/:id" component={SingleEvent} />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`

  display: flex;

  text-align: center;
  /* background-color: #282c34; */
  min-height: 100vh;
  /* display: flex; */
<<<<<<< HEAD
=======

>>>>>>> b0644cf55fa65dba469870b46d822d0cdce82ef9
  flex-direction: column;
  justify-content: center;
`;
