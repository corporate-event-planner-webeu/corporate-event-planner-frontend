import React, { Component } from 'react'
import styled from 'styled-components';

const NewTodoDiv = styled.div`
  input {
    padding: 1rem;
    width: 70%;
    max-height: 10px;
    font-size: 14px;
    margin-bottom: 1rem;
    border: 1px solid #232323;
    vertical-align: top;
    margin-right: 1.0rem;

    &:focus {
        outline: none;
    }
  }

  button {
    padding: 1rem;
    max-height: 43.5px;
    background: transparent;
    border: 1px solid #232323;
    font-size: 12px;
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
