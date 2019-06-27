import React, { Component } from 'react';
import AddEvent from '../components/AddEvent';
import Event from '../components/Event';
import styled from 'styled-components';
import { getAllEvents,createEvent,deleteEvent,uploadImage } from '../store/actions/event';
import { connect } from 'react-redux';
import {getUserId}from '../utils/jwtDecode';
import DOMAIN from '../utils/path';
import { Link } from "react-router-dom";


class Dashboard extends Component {
    state = {
      events: []
    }

    getEvents = () => {
      const user = getUserId();
      const userId = user.subject;

      const url = `${DOMAIN}/api/events/?user_id=${userId}`;
      this.props.getAllEvents(url).then(() => {
        this.setState({ events: this.props.events });
      });  
    }

    async componentDidMount() {
      this.getEvents();
    }


    handleSubmit = (data) => {
      const url = `${DOMAIN}/api/events`;
      this.props.createEvent(url, data).then(res => {
        this.getEvents();
      });
    }

    handleDelete = (id) => {
      const url = `${DOMAIN}/api/events/${id}`;
      this.props.deleteEvent(url);
      this.getEvents()
    }

    render() {
        return (
          <MainDiv>
            <AddEvent uploadImage={this.props.uploadImage} imageurl={this.props.imageurl} uploadingImage={this.props.uploadingImage} handleSubmit={this.handleSubmit} />
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
                  <LinkEventWrapper>
                  <Link to={`/events/${event.id}`}>
                    <Event key={event.id} image_url={event.image_url} handleDelete={this.handleDelete} id={event.id} title={event.event_title} date={event.event_date} time={event.event_time} completed={event.completed} />
                  </Link>
                  </LinkEventWrapper>
                 
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
    fetchingEvents: state.events.fetchingEvents,
    imageurl: state.events.imageurl,
    uploadingImage: state.events.uploadingImage
  }
}

export default connect(mapStateToProps, {getAllEvents, createEvent, deleteEvent, uploadImage})(Dashboard)


const MainDiv = styled.div`
  justify-content: space-between;
  padding: 1rem;
  border: 2px solid white;
  height: 100%;
  min-height: 100%;
  background-color: rgb(233, 236, 240);
  color: rgb(138, 146, 152);
  text-align: left;
  display: flex;
`;

const EventsMainDiv = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  height: 350px;

  a {
    color: rgb(138, 146, 152);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 450px;
    margin: 2rem;
    margin-top: 4rem;
    margin-right: 0;
  }
`;

const LinkEventWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  width: 30%;
`;
