import React from "react";
import styled from "styled-components";

const TodoDiv = styled.div`
  width: 100%;
  background: #fff;
  border-top: 2px solid rgb(238, 241, 244);
  border-bottom: 2px solid rgb(238, 241, 244);
  text-align: left;
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
