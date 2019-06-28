import React, { Component } from "react";
import Todo from "../components/Todo";
import NewTodo from "../components/NewTodo";
import styled from "styled-components";
import { connect } from "react-redux";
import { createTodo, deleteTodo, markTodoComplete, updateTodo } from "../store/actions/todo";
import DOMAIN from "../utils/path";
import PropTypes from "prop-types";

class Todos extends Component {
  state = {
    title: '',
    id: '',
  }

  handleNewTodo = async data => {
    const id = this.props.id ? this.props.id : 0;
    const url = `${DOMAIN}/api/tasks/?event_id=${id}`;
    await this.props.createTodo(url, data);
    this.props.getTodo();
  };

  handleDelete = async (id) => {
    const url = `${DOMAIN}/api/tasks/${id}`;
    this.props.deleteTodo(url).then(()=>{
        this.props.getTodo();
    })
  }

  handleComplete = (id, title, completed) => {
    const data = {
      task_name: title,
      task_completed: !completed 
    }
    const url = `${DOMAIN}/api/tasks/${id}`;
    this.props.markTodoComplete(url, data).then(() => {
      this.props.getTodo();
    })
  }

  handleUpdateTodo = (id, name) => { 
    const data = {
      task_name: name,
    }
    this.setState({
      title: data.task_name,
      id: id,
    })
  }

  completeUpdate = (id, data) => {
    const url = `${DOMAIN}/api/tasks/${id}`;
    this.props.updateTodo(url, data).then(() => {
      this.props.getTodo();
      this.setState({ title: '' })
    })
  }

  render() {
    return (
      <TodoDiv>
        <NewTodo handleNewTodo={this.handleNewTodo} title={this.state.title} id={this.state.id} completeUpdate={this.completeUpdate} />
        {this.props.todos.length === 0 && <div>No Todo found</div>}
        {this.props.fetchingTodo ? (
          <div>Loading...</div>
        ) : (
          this.props.todos.map(todo => <Todo handleUpdateTodo={this.handleUpdateTodo} handleDelete={this.handleDelete} handleComplete={this.handleComplete} key={todo.id} todo={todo} />)
        )}
      </TodoDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events.events,
    fetchingTodo: state.todos.fetchingTodo,
  };
};

export default connect(
  mapStateToProps,
  { createTodo, deleteTodo, markTodoComplete, updateTodo }
)(Todos);

Todos.propTypes = {
  createTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  markTodoComplete: PropTypes.func.isRequired,
};

const TodoDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid rgb(81, 183, 176);
  width: 100%;
  height: auto;
  margin-right: 2rem;
  font-size: 15px;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0 16px 48px rgba(32, 41, 50, 0.21);

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 2.0rem 0;
    padding: 2.5rem;
    width: 100%;
  }
`;
