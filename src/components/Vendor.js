import React from 'react'
import styled from 'styled-components';


export default function Vendor(props) {
    return (
        <VendorDiv>
            <p>{props.vendor.vendor_name}</p>
            <button onClick={() => props.handleDelete(props.vendor.id)}>Delete</button>
            {/* <button onClick={() => props.handleMarkPayed(props.vendor.id)}>Mark Payed</button> */}
        </VendorDiv>
    )
}


const VendorDiv = styled.div`
  width: 100%;
  background: #fff;
  border-top: 2px solid rgb(238, 241, 244);
  border-bottom: 2px solid rgb(238, 241, 244);
  text-align: left;
  p {
    font-weight: bold;
    text-align: left;
    margin-left: 1rem;
  }
`;