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

          <FontAwesomeIcon
            onClick={e => {
              e.stopPropagation();
              this.props.handleDelete(this.props.id);
            }}
            icon={faTrashAlt}
            fixedWidth
          />

          <FontAwesomeIcon
            onClick={e => {
              e.stopPropagation();
              this.props.handleUpdate(this.props.id);
            }}
            icon={faPenAlt}
            fixedWidth
          />

          <FontAwesomeIcon
            onClick={e => {
              e.stopPropagation();
              this.props.handleComplete(this.props.id);
            }}
            icon={faCheckSquare}
            fixedWidth
          />
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
  width: 80%;
  margin-right: 0.3rem;
  margin-bottom: 2.0rem;
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
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 14px;
    font-weight: bold;
    vertical-align: top;
    ${props => (props.completed === 1 ? `color: Teal` : `color : Orange`)}
  }
`;
