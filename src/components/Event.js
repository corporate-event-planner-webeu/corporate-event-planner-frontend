import React, { Component } from "react";
import styled from "styled-components";
import {
  faTrashAlt,
  faPenAlt,
  faCheckSquare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

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
          <div>
            {" "}
            {this.props.completed === 0 ? <p>PENDING</p> : <p>COMPLETED</p>}
          </div>

          <i className="fas fa-trash-alt" onClick={e => {
            e.stopPropagation();
            this.props.handleDelete(this.props.id);
          }} />

          <i className="far fa-edit" onClick={e => {
          e.stopPropagation();
          this.props.handleUpdate(this.props.id);
        }} />

          <i className="far fa-check-square" onClick={e => {
            e.stopPropagation();
            this.props.handleComplete(this.props.id);
          }} />
        </EventStatusDiv>
      </EventDiv>
    );
  }
}

Event.propTypes = {
  image_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

const EventDiv = styled.div`
  cursor: pointer;
  margin-right: 0.3rem;
  margin-bottom: 2.0rem;
  background: #FFFFFF;
  box-shadow: 0 16px 48px rgba(32, 41, 50, 0.21);
  width: 100%;
 

  img {
    width: 100%;
    height: 150px;
    max-height: 130px;
    object-fit: cover;
    @media (max-width: 600px) {
    
    }
  }
`;

const EventSummaryDiv = styled.div`
  padding: 1.5rem;
  //margin-bottom: 0.5rem;

  h2 {
    font-size: 2rem;
    font-family: Overpass, sans-serif;
  }

  p {
    font-size: 1.6rem;
    padding: 0;
  }
`;

const EventStatusDiv = styled.div`
  border-top: 1px solid #7a7a7a;
  padding: 1rem;
  padding-top: 1rem;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div{
  width: 60%;
  }

  p {
    font-size: 1.6rem;
    font-weight: bold;
    vertical-align: top;
    ${props => (props.completed === 1 ? `color: Teal` : `color : Orange`)}
  }
  i {
    color: #07a0c3;
    font-size: 2.2rem;
  }
`;
