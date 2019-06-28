import React, { Component } from "react";
import AddEvent from "../components/AddEvent";
import Event from "../components/Event";
import Loaderr from '../components/Loader';
import styled from "styled-components";
import {
  getAllEvents,
  createEvent,
  deleteEvent,
  markEventComplete
} from "../store/actions/event";
import { connect } from "react-redux";
import { getUserId } from "../utils/jwtDecode";
import DOMAIN from "../utils/path";
import PropTypes from "prop-types";

class Dashboard extends Component {
  state = {
    events: [],
    data: null
  };

  abortController = new AbortController();

  getEvents = () => {
    const user = getUserId();
    const userId = user.subject;

    const url = `${DOMAIN}/api/events/?user_id=${userId}`;
    this.props.getAllEvents(url).then(() => {
      this.setState({ events: this.props.events });
    });
  };

  async componentDidMount() {
    this.getEvents();
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  handleSubmit = data => {
    const url = `${DOMAIN}/api/events`;
    this.props.createEvent(url, data).then(res => {
      this.getEvents();
    });
  };

  handleUpdateSubmit = (id,data) => {
    const url = `${DOMAIN}/api/events/${id}`;
    this.props.markEventComplete(url, data).then(res => {
      this.getEvents();
    })
  }

  handleDelete = id => {
    const url = `${DOMAIN}/api/events/${id}`;
    this.props.deleteEvent(url);
    this.getEvents();
  };

  handleUpdate = async (id) => {
    const data = this.state.events.find(event => event.id === id);
    await this.setState({ data: data });
  };

  handleComplete = (id) => {
    const data = this.state.events.find(event => event.id === id);
    const dataDum = {...data, completed: !data.completed }
    const url = `${DOMAIN}/api/events/${id}`;
    this.props.markEventComplete(url, dataDum).then(res => {
      this.getEvents();
    });
  }

  render() {
    return (
      <MainDiv>
        <AddEvent
          data={this.state.data}
          uploadImage={this.props.uploadImage}
          imageurl={this.props.imageurl}
          uploadingImage={this.props.uploadingImage}
          handleSubmit={this.handleSubmit}
          handleUpdateSubmit={this.handleUpdateSubmit}
        />
        <EventsMainDiv>
          {this.props.fetchingEvents ? (
            <Loaderr />
          ) : this.state.events.length === 0 ? (
            <div>
              <h2>No event found</h2>
            </div>
          ) : (
            ""
          )}

          {this.state.events.map(event => {
            return (
              <LinkEventWrapper key={event.id}>
                <Event
                  {...this.props}
                  handleUpdate={this.handleUpdate}
                  image_url={event.image_url}
                  handleDelete={this.handleDelete}
                  id={event.id}
                  title={event.event_title}
                  date={event.event_date}
                  time={event.event_time}
                  completed={event.completed}
                  handleComplete={this.handleComplete}
                />
              </LinkEventWrapper>
            );
          })}
        </EventsMainDiv>
      </MainDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events.events,
    fetchingEvents: state.events.fetchingEvents,
    imageurl: state.events.imageurl,
    uploadingImage: state.events.uploadingImage
  };
};

export default connect(
  mapStateToProps,
  { getAllEvents, createEvent, deleteEvent, markEventComplete }
)(Dashboard);

Dashboard.propTypes = {
  getAllEvents: PropTypes.func.isRequired,
  createEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  markEventComplete: PropTypes.func.isRequired,
  events: PropTypes.array,
}

const MainDiv = styled.div`
  justify-content: space-between;
  margin: 2.5rem 0;
  height: 100%;
  min-height: 100%;
  background: #F9F9F9;
  //color: rgb(138, 146, 152);
  text-align: left;
  display: flex;
  @media(max-width: 600px) {
    flex-direction: column;
    margin: 0;
    padding: 2.5rem;
  }
`;

const EventsMainDiv = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 350px;
  margin: 2rem;
  @media(max-width: 800px) {
    width: 100%;
    height: auto;
    flex-wrap: nowrap;
    flex-direction: column;
    margin: 1rem 0;
    //padding: 2.5rem;
  }
      //box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      //box-shadow: 0 16px 48px rgba(32, 41, 50, 0.21);
`;

const LinkEventWrapper = styled.div`
  width: 300px;
  @media(max-width: 900px) {
  width: 100%;
  }
        //box-shadow: 0 16px 48px rgba(32, 41, 50, 0.21);
`;
