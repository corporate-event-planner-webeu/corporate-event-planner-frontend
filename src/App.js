import React from 'react';
import styled from 'styled-components';


function App() {
  return (
    <AppWrapper>
        <p>
          🎉 Corporate Event Planner!
        </p>
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
