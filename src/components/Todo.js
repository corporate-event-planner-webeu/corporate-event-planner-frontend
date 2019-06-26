import React from "react";
import styled from "styled-components";

const TodoDiv = styled.div`
  width: 100%;
  background: #fff;
  border-top: 2px solid rgb(238, 241, 244);
  border-bottom: 2px solid rgb(238, 241, 244);
  text-align: left;
  margin-bottom: 0.2rem;
  margin-top: 2.0rem;
  p {
    font-weight: bold;
    text-align: left;
    margin-left: 1rem;
  }
`;

export default function Todo(props) {
  return (
    <TodoDiv>
      <p>{props.todo.task_name}</p>
      <div>
        <button onClick={() => props.handleDelete(props.todo.id)}>
          Delete
        </button>
        <button>Edit</button>
      </div>
    </TodoDiv>
  );
}
