import React, { Component } from "react";
import Todo from "../components/Todo";
import NewTodo from "../components/NewTodo";
import styled from "styled-components";
import { connect } from "react-redux";
import { getAllTodos } from "../store/actions/todo";

class Todos extends Component {
  
  render() {
    return (
      <TodoDiv>
        <NewTodo />
        {this.props.todos.length === 0 && <div>No Todo found</div>}
        {this.props.fetchingTodo ? <div>Loading...</div> : this.props.todos.map(todo => <Todo key={todo.id} todo={todo} />)}
      </TodoDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events.events,
    todos: state.todos.todos,
    fetchingTodo: state.todos.fetchingTodo
  };
};

export default connect(
  mapStateToProps,
  { getAllTodos }
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
