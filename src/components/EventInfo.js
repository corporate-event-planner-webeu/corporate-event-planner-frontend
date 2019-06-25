import React from "react";
import styled from "styled-components";

import headerImage from "../assets/events-img.jpg";

const EventInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid rgb(81, 183, 176);
  border-bottom: 2px solid rgb(81, 183, 176);
  width: 90%;
  background: #fff;
  color: #36454f;
  padding: 2rem;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;

  h3 {
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }
  p {
    font-size: 13px;
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

export default function EventInfo(props) {
  return (
    <EventInfoDiv>
      <HeaderImage>
        <img src={headerImage} alt="header" />
      </HeaderImage>
      <ContentDiv>
        <h3>Bringing developers together</h3>
        <p>
          Africa Youth and Talent Summit heads into its 3rd year after a
          successful 2017 & 2018 edition that saw over 1,000 attendees majorly
          from Africa countries including, Ghana, Kenya, Nigeria, Somalia, Togo,
          and Zimbabwe and had a global online reach of 2 million. The annual
          Summit is arguably Africa's largest Youth and Talent Development
          Platform. The summit returns to Nigeria on 20th July 2019. AYTS
          week-long programming focuses on youth, personal development, ideas,
          trends, insights, business agriculture, and best practices to
          transform communities across Africa.
        </p>
        <PeriodDiv>
          <p>21/03/2019</p> &nbsp; &nbsp;
          <p>9:00am</p>
        </PeriodDiv>
        <p>Gbagada Express way</p>
        <p>Attendees: 800persons</p>
        <p>200,000</p>
      </ContentDiv>
    </EventInfoDiv>
  );
}