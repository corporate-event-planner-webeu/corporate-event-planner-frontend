import React from 'react';
import styled from 'styled-components';

import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';
import SingleEvent from './views/SingleEvent';
import LandingPage from './views/LandingPage';

import {Route} from 'react-router-dom';


function App() {
  return (
    <AppWrapper>
        {/* <p>
          🎉 Corporate Event Planner!
        </p> */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/events/:id" component={SingleEvent} />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
