import React from 'react';
import styled from 'styled-components';

import Login from './components/Login';
import Dashboard from './containers/Dashboard';

import {Route} from 'react-router-dom';


function App() {
  return (
    <AppWrapper>
        {/* <p>
          🎉 Corporate Event Planner!
        </p> */}
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
