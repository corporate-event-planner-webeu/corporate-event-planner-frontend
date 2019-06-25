import React, { Component } from 'react'
import styled from 'styled-components';
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
    ${props => (props.completed ? `color: Teal` : `color : Orange`)}
  }
`;

export default class Event extends Component {
    render() {
        return (
          <EventDiv>
            <img src={img} alt="" />
            <EventSummaryDiv>
              <h2>Bringing Developers Together</h2>
              <p>22/03/2019</p>
              <p>3:45pm</p>
            </EventSummaryDiv>
            <EventStatusDiv>
                <p>PENDING</p>
            </EventStatusDiv>
          </EventDiv>
        );
    }
}
