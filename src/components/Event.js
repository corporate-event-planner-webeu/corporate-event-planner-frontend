import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import img from '../assets/events-img.jpg';

const EventDiv = styled.div`
  max-height: 350px;
  height: 330px;
  min-height: 350px;
  margin: 2rem;
  width: 29%;
  background: #fff;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;

  img {
      width: 100%;
  }
`;

const EventSummaryDiv = styled.div`
    padding: 1.5rem;
    height: 100px;
    max-height: 100px;
    margin-bottom: 2.0rem;

    p {
        font-size: 11px;
        padding: 0;
    }
`; 

const EventStatusDiv = styled.div`
  margin-top: 6rem;
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

export default class Event extends Component {
  
    render() {
        return (
          <div>
            <EventDiv>
              <Link to={`/events/${this.props.id}`}><img src={this.props.image_url} alt="" /></Link>
              <EventSummaryDiv>
                <h2>{this.props.title}</h2>
                <p>{this.props.date}</p>
                <p>{this.props.time}</p>
              </EventSummaryDiv>

              <EventStatusDiv completed={this.props.completed}>
                {this.props.completed === 0 ? (
                  <p>PENDING</p>
                ) : (
                  <p>COMPLETED</p>
                )}
                <button
                  onClick={() => this.props.handleDelete(this.props.id)}
                >
                  Delete
                </button>
              </EventStatusDiv>
            </EventDiv>
          </div>
        );
    }
}
