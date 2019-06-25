import React, { Component } from 'react';
import Vendor from '../components/Vendor';
import NewVendor from '../components/NewVendor';
import styled from 'styled-components';

const VendorDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #232323;
  width: 80%;
  margin-right: 2rem;
  font-size: 15px;
  padding: 10px;
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
