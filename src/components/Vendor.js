import React from 'react'
import styled from 'styled-components';

const VendorDiv = styled.div`
  width: 100%;
  background: #fff;
  border-top: 2px solid rgb(238, 241, 244);
  border-bottom: 2px solid rgb(238, 241, 244);
  text-align: left;
  margin-bottom: 0.2rem;
  margin-top: 2rem;
  p {
    font-weight: bold;
    text-align: left;
    margin-left: 1rem;
  }
`;

export default function Vendor() {
    return (
        <VendorDiv>
            <p>Noble and sons</p>
        </VendorDiv>
    )
}
