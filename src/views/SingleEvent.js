import React, { Component,Suspense } from "react";

import EventInfo from "../components/EventInfo";
import Vendors from "./Vendors";
import styled from "styled-components";
import {connect} from 'react-redux';

import {getAllEvents} from '../store/actions/event';
import DOMAIN from "../utils/path";
const Todos = React.lazy(() => import("./Todos"));


class Event extends Component {
  state = {
    event: {},
    fetchingEvents: false
  }

  componentDidMount() {
    const eventID = this.props.match.params.id;
    const url = `${DOMAIN}/api/events/${eventID}`;
    this.props.getAllEvents(url)
      .then(() => {
        this.setState({event: this.props.events, fetchingEvents: this.props.fetchingEvents})
      })
  }


  render() {
    return (
      <SingleEvent>
        <EventInfoDiv>
          <EventInfo event={this.state.event} fetchingEvents={this.state.fetchingEvents} />
        </EventInfoDiv>
        <TodosDiv>
          <Suspense fallback={<div>Loading...</div>}>
            <Todos />
          </Suspense>
        </TodosDiv>
        <VendorsDiv>
          <Vendors />
        </VendorsDiv>
      </SingleEvent>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events.events,
    fetchingEvents: state.events.fetchingEvents
  };
};



export default connect(mapStateToProps, {getAllEvents})(Event)

const SingleEvent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border: 2px solid white;
  min-height: 100vh;
  background-color: rgb(233, 236, 240);
  color: rgb(138, 146, 152);
`;

const EventInfoDiv = styled.div`
  width: 35%;
`;

const TodosDiv = styled.div`
  width: 30%;
`;

const VendorsDiv = styled.div`
  width: 30%;
  margin-top: 2rem;
`;
