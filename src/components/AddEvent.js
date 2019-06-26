import React, { Component } from 'react'
import styled from 'styled-components';


export default class AddEvent extends Component {
    state = {
      title: '',
      description: '',
      budget: '',
      attendees: '',
      date: '',
      time: ''
    }

    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () => {
      const data = {
        event_title: this.state.title, 
        event_description: this.state.description, 
        event_date: this.state.date, 
        event_time: this.state.time,
        attendees: this.state.attendees,
        budget: this.state.budget,
      }
      this.props.handleSubmit(data)
    }

    render() {
        return (
          <AddEventDiv>
            <p>Create Event</p>
            <input
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              type="text"
              placeholder="Event Title"
            />
            <input
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              type="text"
              placeholder="Event Description"
            />
            <input
              name="budget"
              value={this.state.budget}
              onChange={this.handleChange}
              type="text"
              placeholder="Budget"
            />
            <input
              name="attendees"
              value={this.state.attendees}
              onChange={this.handleChange}
              type="text"
              placeholder="Number of Attendees"
            />
            <input
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              type="text"
              placeholder="Event Date"
            />
            <input
              name="time"
              value={this.state.time}
              onChange={this.handleChange}
              type="text"
              placeholder="Event Time"
            />
            <button onClick={this.handleSubmit}>Create Event</button>
          </AddEventDiv>
        );
    }
}


const AddEventDiv = styled.div`
  border-top: 2px solid teal;
  display: flex;
  flex-direction: column;
  max-height: 450px;
  margin: 2rem;
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