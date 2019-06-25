import React from 'react'
import styled from 'styled-components';

const VendorDiv = styled.div`
  border-bottom: 2px solid black;
  background: #2323;
  width: 100%;
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
