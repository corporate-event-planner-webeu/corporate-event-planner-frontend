import React, { Component } from 'react'
import styled from 'styled-components';

const AddEventDiv = styled.div`
  border-top: 2px solid teal;
  display: flex;
  flex-direction: column;
  max-height: 450px;
  margin: 2.0rem;
  margin-right: 0;
  width: 25%;
  background: #fff;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
  padding: 2rem;

  p {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }

  input {
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid rgb(186, 192, 198);
    width: 90%;
    margin-left: 1.4rem;

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
    width: 90%;
    margin: 1.4rem;
  }
`;
export default class AddEvent extends Component {
    render() {
        return (
            <AddEventDiv>
                <p>Create Event</p>
                <input type="text" placeholder="Event Title" />
                <input type="text" placeholder="Event Description" />
                <input type="text" placeholder="Budget" />
                <input type="text" placeholder="Number of Attendees" />
                <input type="text" placeholder="Event Date" />
                <input type="text" placeholder="Event Time" />
                <button>Create Event</button>
            </AddEventDiv>
        )
    }
}
