import React, { Component,Suspense } from "react";
import EventInfo from "../components/EventInfo";
import styled from "styled-components";
import {connect} from 'react-redux';
import {getAllEvents} from '../store/actions/event';
import {getAllTodos} from '../store/actions/todo';
import { getAllVendors } from '../store/actions/vendor';
import DOMAIN from "../utils/path";
import { Button, Header, Icon, Modal, Input } from "semantic-ui-react";
import PropTypes from "prop-types";
const Todos = React.lazy(() => import("./Todos"));
const Vendors = React.lazy(() => import('./Vendors'));


class Event extends Component {
  state = {
    id: null,
    event: {},
    todos: [],
    vendors: [],
    fetchingEvents: false,
    modalOpen: false
  };


  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  getTodo = () => {
    const id = this.state.id ? this.state.id : 0;
    const url = `${DOMAIN}/api/tasks/?event_id=${id}`;
    this.props.getAllTodos(url).then(() => {
      this.setState({
        todos: this.props.todos
      });
    });
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
      });
    });
  };

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
              <Todos
                getTodo={this.getTodo}
                id={this.state.id}
                todos={this.state.todos}
                fetchingTodo={this.props.fetchingTodo}
              />
            )}
          </Suspense>
        </TodosDiv>
        <VendorsDiv>
          <Suspense fallback={<div>Loading...</div>}>
            <Vendors
              getVendor={this.getVendor}
              vendors={this.state.vendors}
              fetchingVendors={this.props.fetchingVendors}
              id={this.state.id}
            />
          </Suspense>
        </VendorsDiv>
        <ModalDiv>
          <Modal
            trigger={
              <Button onClick={this.handleOpen} animated="vertical">
                <Button.Content hidden>Invite</Button.Content>
                <Button.Content visible>
                  <Icon name="plus" />
                </Button.Content>
              </Button>
            }
            open={this.state.modalOpen}
            onClose={this.handleClose}
            basic
            size="small"
            closeIcon
          >
            <Header icon="browser" content="Invite Team Mates" />
            <Modal.Content>
              <Input fluid icon placeholder="Full Name">
                <input />
                <Icon name="user" />
              </Input>
              <br />
              <br />
              <Input fluid iconPosition="left" placeholder="Email Address">
                <Icon name="at" />
                <input />
              </Input>
            </Modal.Content>
            <Modal.Actions>
              <Button color="green" onClick={this.handleClose} inverted>
                <Icon name="checkmark" /> Invite
              </Button>
            </Modal.Actions>
          </Modal>
        </ModalDiv>
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

Event.propTypes = {
  getAllEvents: PropTypes.func.isRequired,
  getAllVendors: PropTypes.func.isRequired,
  getAllTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  vendors: PropTypes.array.isRequired
};

const SingleEvent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  min-height: 100vh;
  background: #FFFFFF;
  color: rgb(138, 146, 152);

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 0;
    padding: 2.5rem;
    width: 100%;
  }

  .ui.button {
    background: linear-gradient(135deg, #07a0c3 0%,#89bde5 100%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    &:hover {
      background: #131c24;
      color: white;
    }
  }
`;

const ModalDiv = styled.div`
  .ui.basic.modal > .actions,
  .ui.basic.modal > .content,
  .ui.basic.modal > .header {
    background-color: blue;
  }
`;

const EventInfoDiv = styled.div`
  width: 35%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const TodosDiv = styled.div`
  width: 30%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const VendorsDiv = styled.div`
  width: 30%;
  margin-left: 2rem;
  @media (max-width: 600px) {
    margin-left: 0;
    width: 100%;
  }
`;
