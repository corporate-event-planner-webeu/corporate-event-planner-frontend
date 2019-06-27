import React, { Component } from "react";
import styled from "styled-components";
import {
  faCalendarAlt,
  faClock,
  faUsers,
  faMoneyBill
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class EventInfo extends Component {

  render() {
    return (
      <EventInfoDiv>
        <HeaderImage>
          <img src={this.props.event.image_url} alt="header" />
        </HeaderImage>
        <ContentDiv>
          <h3>{this.props.event.event_title}</h3>
          <p>{this.props.event.event_description}</p>
            <PeriodDiv>
              <div>
                <FontAwesomeIcon icon={faCalendarAlt} /> &nbsp; &nbsp;
                <p>{this.props.event.event_date}</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faClock} /> &nbsp; &nbsp;
                <p>{this.props.event.event_time}</p>
              </div>
            </PeriodDiv>
            <div className="attendance">
              <FontAwesomeIcon icon={faUsers} /> &nbsp; &nbsp;
              <p>Attendees: {this.props.event.attendees}</p>
            </div>
            <div className="attendance">
              <FontAwesomeIcon icon={faMoneyBill} /> &nbsp; &nbsp;
              <p>{this.props.event.budget}</p>
            </div>
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
    text-align: left;
    font-size: 24px;
  }
  p {
    font-size: 15px;
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
  padding: 1rem;
  .attendance {
    display: flex;
    margin: 2.0rem 0;

    p {
      font-weight: bold;
      vertical-align: top;
    }
  }
`;

const PeriodDiv = styled.div`
  p {
    vertical-align: top;
    font-weight: bold;
  }
  div {
    font-size: 16px;
    display: flex;
    margin: 2rem 0;
  }
`;