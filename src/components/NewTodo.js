import React, { Component } from 'react'
import styled from 'styled-components';

const NewTodoDiv = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  input {
    padding: 1rem;
    flex: 8;
    max-height: 10px;
    font-size: 14px;
    margin-bottom: 1rem;
    border: 1px solid rgb(186, 192, 198);
    vertical-align: top;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 1rem;
    max-height: 43.5px;
    background: rgb(81, 183, 176);
    color: white;
    flex: 1;
    outline: none;
    border: none;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default class NewTodo extends Component {
    render() {
        return (
            <NewTodoDiv>
                <input type="text" placeholder="Todo Title" />
                <button>Save</button>
            </NewTodoDiv>
        )
    }
}
