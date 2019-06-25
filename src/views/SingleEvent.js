import React, { Component } from "react";
import EventInfo from "../components/EventInfo";
import Todos from "./Todos";
import Vendors from "./Vendors";
import styled from "styled-components";
import {connect} from 'react-redux';

import {getAllEvents} from '../store/actions/event';
import DOMAIN from "../utils/path";


class Event extends Component {
  state = {
    event: null
  }
  
  async componentDidMount() {
    const eventID = this.props.match.params.id;
    const url = `${DOMAIN}/api/events/${eventID}`;
    await getAllEvents(url);
    await this.setState({event: this.props.events})
  }

  render() {
    return (
      <SingleEvent>
        <EventInfoDiv>
          <EventInfo events={this.props.events} />
        </EventInfoDiv>
        <TodosDiv>
          <Todos />
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
    events: state.events.events
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