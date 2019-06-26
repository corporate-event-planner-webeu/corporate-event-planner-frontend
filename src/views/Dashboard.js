import React, { Component } from 'react';
import AddEvent from '../components/AddEvent';
import Event from '../components/Event';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getAllEvents,createEvent } from '../store/actions/event';
import { connect } from 'react-redux';
import {getUserId}from '../utils/jwtDecode';
import DOMAIN from '../utils/path';


class Dashboard extends Component {
    state = {
      events: []
    }

    async componentDidMount() {
      const user = getUserId();
      const userId = user.subject;

      const url = `${DOMAIN}/api/events/?user_id=${userId}`;
      this.props.getAllEvents(url)
        .then(() => {
          this.setState({events: this.props.events})
        })  
    }


    handleSubmit = (data) => {
      const url = `${DOMAIN}/api/events`;
      this.props.createEvent(url, data).then(res => {
        window.location.reload()
        this.props.history.push('/dashboard')
      });
    }

    render() {
        return (
          <MainDiv>
            <AddEvent handleSubmit={this.handleSubmit} />
            <EventsMainDiv>
              {this.props.fetchingEvents ? (
                <div>
                  <h2>Loading...</h2>
                </div>
              ) : this.state.events.length === 0 ? (
                <div>
                  <h2>No event found</h2>
                </div>
              ) : (
                ""
              )}

              {this.state.events.map(event => {
                return (
                  <Link key={event.id} to={`/events/${event.id}`}>
                    <Event title={event.event_title} date={event.event_date} time={event.event_time} completed={event.completed} />
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
    events: state.events.events,
    fetchingEvents: state.events.fetchingEvents
  }
}

export default connect(mapStateToProps, {getAllEvents, createEvent})(Dashboard)


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