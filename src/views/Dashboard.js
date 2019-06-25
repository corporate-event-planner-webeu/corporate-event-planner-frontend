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

      const url = `${DOMAIN}/api/events/?user_id=1`;
      this.props.getAllEvents(url);
    }

    render() {
        return (
          <MainDiv>
            <AddEvent />
            <EventsMainDiv>
              {this.props.events.length === 0 ? (
                <div>
                  <h2>No event found</h2>
                </div>
              ) : (
                ""
              )}
              {this.props.events.map(event => {
                return (
                  <Link
                    key={event.id}
                    to={`/events/${event.id}`}
                  >
                    <Event />
                  </Link>
                );
              })}
            </EventsMainDiv>
          </MainDiv>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events
  }
}

export default connect(mapStateToProps, {getAllEvents})(Dashboard)