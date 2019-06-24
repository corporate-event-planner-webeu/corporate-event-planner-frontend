import React from 'react';
import styled from 'styled-components';
import Login from './components/Login';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Route 
          path='/login'
          component={Login}/>
      </BrowserRouter>
       
       
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
