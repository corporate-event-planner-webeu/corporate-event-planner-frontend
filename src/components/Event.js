import React, { Component } from "react";
import styled from "styled-components";
import img from "../assets/events-img.jpg";

export default class Event extends Component {
  render() {
    return (
      <EventDiv
        onClick={() => {
          this.props.history.push(`/events/${this.props.id}`);
        }}
      >
        <img src={this.props.image_url} alt="" />
        <EventSummaryDiv>
          <h2>{this.props.title}</h2>
          <p>{this.props.date}</p>
          <p>{this.props.time}</p>
        </EventSummaryDiv>

        <EventStatusDiv completed={this.props.completed}>
          {this.props.completed === 0 ? <p>PENDING</p> : <p>COMPLETED</p>}
          <button
            onClick={e => {
              e.stopPropagation();
              this.props.handleDelete(this.props.id);
            }}
          >
            Delete
          </button>
          <button
            onClick={e => {
              e.stopPropagation();
              this.props.handleUpdate(this.props.id);
            }}
          >
            Edit
          </button>
        </EventStatusDiv>
      </EventDiv>
    );
  }
}

const EventDiv = styled.div`
  width: 80%;
  margin-right: 0.3rem;
  background: #fff;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;

  img {
    width: 100%;
    height: 150px;
    max-height: 130px;
  }
`;

const EventSummaryDiv = styled.div`
  padding: 1.5rem;
  margin-bottom: 2rem;

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 11px;
    padding: 0;
  }
`;

const EventStatusDiv = styled.div`
  border-top: 1px solid rgb(138, 146, 152);
  padding: 1rem;
  padding-top: 0.2rem;
  margin-bottom: 0;

  p {
    font-size: 14px;
    font-weight: bold;
    vertical-align: top;
    ${props => (props.completed === 1 ? `color: Teal` : `color : Orange`)}
  }
`;
