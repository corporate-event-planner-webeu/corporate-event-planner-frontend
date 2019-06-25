import React from "react";
import styled from "styled-components";

const TodoDiv = styled.div`
  border-bottom: 2px solid black;
  width: 100%;
  background: #2323;
  p {
    font-weight: bold;
    text-align: left;
    margin-left: 1.0rem;
  }
`;

export default function Todo() {
  return (
    <TodoDiv>
      <p>Pay vendor</p>
    </TodoDiv>
  );
}
