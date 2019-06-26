import React, { Component,Suspense } from "react";

import EventInfo from "../components/EventInfo";
import Vendors from "./Vendors";
import styled from "styled-components";
import {connect} from 'react-redux';
import {getAllEvents} from '../store/actions/event';
import {getAllTodos} from '../store/actions/todo';
import { getAllVendors } from '../store/actions/vendor';
import DOMAIN from "../utils/path";
const Todos = React.lazy(() => import("./Todos"));


class Event extends Component {
  state = {
    id: null,
    event: {},
    todos: [],
    vendors: [],
    fetchingEvents: false
  };

  getTodo = () => {
    const id = this.state.id ? this.state.id : 0;
    const url = `${DOMAIN}/api/tasks/?event_id=${id}`;
    this.props.getAllTodos(url).then(() => {
      this.setState({
        todos: this.props.todos
      })
    })
  };

  async componentDidMount() {
    const eventID = this.props.match.params.id;
    const url = `${DOMAIN}/api/events/${eventID}`;
    await this.props.getAllEvents(url).then(() => {
      this.setState({
        id: eventID,
        event: this.props.events,
        fetchingEvents: this.props.fetchingEvents
      });
    });

    await this.getTodo();
    await this.getVendor();
  }
  
  getVendor = () => {
    const id = this.state.id ? this.state.id : 0;
    const url = `${DOMAIN}/api/vendors/?event_id=${id}`;
    this.props.getAllVendors(url).then(() => {
      this.setState({
        vendors: this.props.vendors
      })
    })
  }

  render() {
    return (
      <SingleEvent>
        <EventInfoDiv>
          <EventInfo
            event={this.state.event}
            fetchingEvents={this.state.fetchingEvents}
          />
        </EventInfoDiv>
        <TodosDiv>
          <Suspense fallback={<div>Loading...</div>}>
          {this.state.fetchingEvents ? (
            <div>Loading...</div>
          ) : (
            <Todos getTodo={this.getTodo} id={this.state.id} todos={this.state.todos} fetchingTodo={this.props.fetchingTodo} />
          )}
          </Suspense>
        </TodosDiv>
        <VendorsDiv>
          <Vendors getVendor={this.getVendor} vendors={this.state.vendors} fetchingVendors={this.props.fetchingVendors} id={this.state.id} />
        </VendorsDiv>
      </SingleEvent>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events.events,
    todos: state.todos.todos,
    vendors: state.vendors.vendors,
    fetchingEvents: state.events.fetchingEvents,
    fetchingTodo: state.todos.fetchingTodo,
    fetchingVendors: state.vendors.fetchingVendors,
  };
};



export default connect(mapStateToProps, {getAllVendors, getAllEvents, getAllTodos})(Event)

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
