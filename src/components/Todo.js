import React from "react";
import styled from "styled-components";
import { faTrashAlt, faPenAlt, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export default function Todo(props) {
  
  return (
    <TodoDiv completed={props.todo.task_completed}>
      <div>
        <p>{props.todo.task_name}</p>
      </div>

      <div>
        <i
          className="fas fa-trash-alt"
          onClick={() => props.handleDelete(props.todo.id)}
        />
        <i
          className="far fa-edit"
          onClick={() =>
            props.handleUpdateTodo(props.todo.id, props.todo.task_name)
          }
        />
       
        <i
          className="far fa-check-square"
          onClick={() =>
            props.handleComplete(
              props.todo.id,
              props.todo.task_name,
              props.todo.task_completed
            )
          }
        />
       
      </div>
    </TodoDiv>
  );
}

Todo.propType = {
  todo: PropTypes.object.isRequired
}

const TodoDiv = styled.div`
  width: 100%;
  background: #fff;
  border-top: 2px solid rgb(238, 241, 244);
  border-bottom: 2px solid rgb(238, 241, 244);
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem;

  div {
    display: flex;
    justify-content: space-between;
    width: 30%;
  }
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
