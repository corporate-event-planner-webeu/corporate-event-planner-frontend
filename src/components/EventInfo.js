import React, { Component } from "react";
import styled from "styled-components";


export default class EventInfo extends Component {

  render() {
    return (
      <EventInfoDiv>
        <HeaderImage>
          <img src={this.props.event.image_url} alt="header" />
        </HeaderImage>
        <ContentDiv>
          <h3>{this.props.event.event_title}</h3>
          <p>
            {this.props.event.event_description}
          </p>
          <PeriodDiv>
            <p>{this.props.event.event_date}</p> &nbsp; &nbsp;
            <p>{this.props.event.event_time}</p>
          </PeriodDiv>
          <p>Gbagada Express way</p>
          <p>Attendees: {this.props.event.attendees}</p>
          <p>{this.props.event.budget}</p>
        </ContentDiv> 
      </EventInfoDiv>
    );
  }
}




const EventInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid rgb(81, 183, 176);
  border-bottom: 2px solid rgb(81, 183, 176);
  width: 90%;
  background: #fff;
  color: #36454f;
  padding: 2rem;
  margin-left: 2rem;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;

  h3 {
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }
  p {
    font-size: 14px;
    text-align: left;
  }
`;

const HeaderImage = styled.div`
  width: 100%;
  img {
    width: 100%;
    max-height: 350px;
  }
`;

const ContentDiv = styled.div`
  padding: 1.5rem;
`;

const PeriodDiv = styled.div`
  display: flex;
`;