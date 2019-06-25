import React, { Component } from 'react';
import AddEvent from '../components/AddEvent';
import Event from '../components/Event';
import styled from 'styled-components';

const MainDiv = styled.div`
  justify-content: space-between;
  padding: 1rem;
  border: 2px solid white;
  min-height: 100vh;
  background-color: rgb(233, 236, 240);
  color: rgb(138, 146, 152);
  text-align: left;

  display: flex;
  flex-wrap: wrap;
`;

export default class Dashboard extends Component {
    render() {
        return (
            <MainDiv>
                <AddEvent />
                <Event />
            </MainDiv>
        )
    }
}
