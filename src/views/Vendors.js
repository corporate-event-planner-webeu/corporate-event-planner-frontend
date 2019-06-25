import React, { Component } from 'react';
import Vendor from '../components/Vendor';
import NewVendor from '../components/NewVendor';
import styled from 'styled-components';

const VendorDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid rgb(81, 183, 176);
  width: 80%;
  margin-right: 2rem;
  font-size: 15px;
  padding: 10px;
  background: #fff;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
`;

export default class Vendors extends Component {
    render() {
        return (
            <VendorDiv>
                <NewVendor />
               <Vendor /> 
            </VendorDiv>
        )
    }
}
