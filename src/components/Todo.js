import React from "react";
import styled from "styled-components";
import { faTrashAlt, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Todo(props) {
  return (
    <TodoDiv completed={props.todo.task_completed}>
      <p>{props.todo.task_name}</p>
      <div>
        <FontAwesomeIcon
          onClick={() => props.handleDelete(props.todo.id)}
          icon={faTrashAlt}
          style={{ color: "red" }}
        />
        <button>Edit</button>
        <button
          onClick={() =>
            props.handleComplete(
              props.todo.id,
              props.todo.task_name,
              props.todo.task_completed
            )
          }
        >
          Complete
        </button>
      </div>
    </TodoDiv>
  );
}

const TodoDiv = styled.div`
  width: 100%;
  background: #fff;
  border-top: 2px solid rgb(238, 241, 244);
  border-bottom: 2px solid rgb(238, 241, 244);
  text-align: left;
  display: flex;
  justify-content: space-between;
  p {
    font-weight: bold;
    text-align: left;
    margin-left: 1rem;
    ${props =>
      props.completed === 1
        ? `text-decoration: line-through`
        : `text-decoration: none`}
  }
`;