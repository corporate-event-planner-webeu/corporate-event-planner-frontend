import React, { Component } from 'react';
import Vendor from '../components/Vendor';
import NewVendor from '../components/NewVendor';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createVendor, deleteVendor, markVendorAsPaid } from '../store/actions/vendor';
import DOMAIN from "../utils/path";


class Vendors extends Component {
    handleSubmit = (data) => {
        const id = this.props.id ? this.props.id : 0;
        const url = `${DOMAIN}/api/vendors/?event_id=${id}`;
        this.props.createVendor(url, data);
        this.props.getVendor();
    }

    handleDelete = (id) => {
        const url = `${DOMAIN}/api/vendors/${id}`;
        this.props.deleteVendor(url).then(()=>{
            this.props.getVendor();
        })
    }
    handleMarkPayed = (id) => {
        // const data = {
        //   vendor_name: title,
        //   vendor_payed: !payed 
        // }
        const url = `${DOMAIN}/api/vendors/${id}`;
        this.props.markVendorAsPaid(url).then(() => {
          this.props.getVendor();
        })
      }

    render() {
        return (
            <VendorDiv>
                <NewVendor handleSubmit={this.handleSubmit} />
                {this.props.vendors.map(vendor => (
                    <Vendor vendor={vendor} key={vendor.id} handleDelete={this.handleDelete} handleMarkPayed={this.handleMarkPayed} /> 
                ))}
              
            </VendorDiv>
        )
    }
}

export default connect(null, {createVendor, deleteVendor, markVendorAsPaid})(Vendors)


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
