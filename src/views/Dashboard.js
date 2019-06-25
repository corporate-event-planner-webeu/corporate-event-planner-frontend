import React, { Component } from 'react';
import AddEvent from '../components/AddEvent';
import Event from '../components/Event';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainDiv = styled.div`
  justify-content: space-between;
  padding: 1rem;
  border: 2px solid white;
  min-height: 100vh;
  background-color: rgb(233, 236, 240);
  color: rgb(138, 146, 152);
  text-align: left;

  display: flex;
`;

const EventsMainDiv = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;

  a {
    color: rgb(138, 146, 152);
    text-decoration: none;
  }
`;

export default class Dashboard extends Component {
    render() {
        return (
          <MainDiv>
            <AddEvent />
            <EventsMainDiv>
              <Link to="/events/1">
                <Event />
              </Link>
            </EventsMainDiv>
          </MainDiv>
        );
    }
}
