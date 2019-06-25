import React, { Component,Suspense } from "react";

import EventInfo from "../components/EventInfo";
import Vendors from "./Vendors";
import styled from "styled-components";
import {connect} from 'react-redux';

import {getAllEvents} from '../store/actions/event';
import DOMAIN from "../utils/path";
const Todos = React.lazy(() => import("./Todos"));


class Event extends Component {
  
  async componentDidMount() {
    const eventID = this.props.match.params.id;
    const url = `${DOMAIN}/api/events/${eventID}`;
    await this.props.getAllEvents(url);
  }


  render() {
    return (
      <SingleEvent>
        <EventInfoDiv>
          <EventInfo event={this.props.events} />
        </EventInfoDiv>
        <TodosDiv>
          <Suspense fallback={<div>Loading...</div>}>
            <Todos todos={this.props.events.tasks} fetchingEvents={this.props.fetchingEvents} />
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
  padding: 2rem;
  border: 2px solid white;
  min-height: 100vh;
  background-color: rgb(233, 236, 240);
  color: rgb(138, 146, 152);
`;

const EventInfoDiv = styled.div`
  width: 35%;
  margin-top: 2rem;
`;

const TodosDiv = styled.div`
  width: 30%;
  margin-top: 2rem;
`;

const VendorsDiv = styled.div`
  width: 30%;
  margin-top: 2rem;
`;