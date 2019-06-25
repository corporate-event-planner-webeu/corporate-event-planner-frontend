import React, { Component } from "react";
import EventInfo from "../components/EventInfo";
import Todos from "./Todos";
import Vendors from "./Vendors";
import styled from "styled-components";

const SingleEvent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border: 2px solid white;
  min-height: 100vh;
  background-color: rgb(233,236,240);
  color: rgb(138, 146, 152);
`;

const EventInfoDiv = styled.div`
  width: 35%;
  margin-top: 2rem;
`;

const TodosDiv = styled.div`
  width: 30%;
  margin-top: 2rem;
`;

const VendorsDiv = styled.div`
  width: 30%;
  margin-top: 2rem;
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