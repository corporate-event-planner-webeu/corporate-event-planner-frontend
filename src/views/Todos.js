import React, { Component } from "react";
import Todo from "../components/Todo";
import NewTodo from '../components/NewTodo';
import styled from "styled-components";

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
`;

export default class Todos extends Component {
  render() {
    return (
      <TodoDiv>
        <NewTodo />
        <Todo />
      </TodoDiv>
    );
  }
}
