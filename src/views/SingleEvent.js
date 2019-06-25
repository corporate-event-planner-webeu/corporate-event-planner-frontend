import React, { Component } from "react";
import EventInfo from "../components/EventInfo";
import Todos from "./Todos";
import Vendors from "./Vendors";
import styled from "styled-components";

const SingleEvent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border: 2px solid white;
  min-height: 100vh;
`;

const EventInfoDiv = styled.div`
  width: 30%;
`;

const TodosDiv = styled.div`
  width: 30%;
`;

const VendorsDiv = styled.div`
  width: 30%;
`;

export default class Event extends Component {
  render() {
    return (
      <SingleEvent>
        <EventInfoDiv>
          <EventInfo />
        </EventInfoDiv>
        <TodosDiv>
          <Todos />
        </TodosDiv>
        <VendorsDiv>
          <Vendors />
        </VendorsDiv>
      </SingleEvent>
    );
  }
}
