import React, { Component } from "react";
import styled from "styled-components";

const NewVendorDiv = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  input {
    padding: 1rem;
    width: 60%;
    max-height: 10px;
    font-size: 14px;
    flex: 8;
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
    outline: none;
    border: none;
    flex: 1;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default class NewTodo extends Component {
  render() {
    return (
      <NewVendorDiv>
        <input type="text" placeholder="Vendor Name" />
        <button>Save</button>
      </NewVendorDiv>
    );
  }
}
