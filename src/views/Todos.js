import React, { Component } from "react";
import Todo from "../components/Todo";
import NewTodo from "../components/NewTodo";
import styled from "styled-components";
import { connect } from "react-redux";
import { createTodo, deleteTodo, markTodoComplete } from "../store/actions/todo";
import DOMAIN from "../utils/path";

class Todos extends Component {
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

  render() {
    return (
      <TodoDiv>
        <NewTodo handleNewTodo={this.handleNewTodo} />
        {this.props.todos.length === 0 && <div>No Todo found</div>}
        {this.props.fetchingTodo ? (
          <div>Loading...</div>
        ) : (
          this.props.todos.map(todo => <Todo handleDelete={this.handleDelete} handleComplete={this.handleComplete} key={todo.id} todo={todo} />)
        )}
      </TodoDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events.events,
    fetchingTodo: state.todos.fetchingTodo
  };
};

export default connect(
  mapStateToProps,
  { createTodo, deleteTodo, markTodoComplete }
)(Todos);

const TodoDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid rgb(81, 183, 176);
  width: 100%;
  height: auto;
  margin-right: 2rem;
  font-size: 15px;
  padding: 10px;
  background: #fff;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
`;
