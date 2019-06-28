import React from 'react';
import styled from 'styled-components';

import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';
import SingleEvent from './views/SingleEvent';
import LandingPage from './views/LandingPage';
import About from './views/AboutPage';
import { Navigation } from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navigation />
       <AppWrapper>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/about" component={About} />
          <PrivateRoute path="/events/:id" component={SingleEvent} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </AppWrapper>
    </div>
  );
}

export default App;

const AppWrapper = styled.div`
  text-align: center;
  background: #F9F9F9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

 @media(max-width: 500px){
   width: 100%;

 }
`;
