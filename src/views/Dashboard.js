import React, { Component } from 'react';
import AddEvent from '../components/AddEvent';
import Event from '../components/Event';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getAllEvents } from '../store/actions/event';
import { connect } from 'react-redux';
import {getUserId}from '../utils/jwtDecode';
import DOMAIN from '../utils/path';

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

class Dashboard extends Component {

    componentDidMount() {
      const user = getUserId();
      const userId = user.subject;

      const url = `${DOMAIN}/api/events/?user_id=${userId}`;
      this.props.getAllEvents(url);
    }

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

export default connect(null, {getAllEvents})(Dashboard)