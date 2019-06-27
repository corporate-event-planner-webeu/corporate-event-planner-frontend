import React from 'react'
import styled from "styled-components";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";


export default function Vendor(props) {
    return (
      <VendorDiv>
        <div>
          <p>{props.vendor.vendor_name}</p>
        </div>
        <div>
          <p>{props.vendor.contact_number}</p>
        </div>

        <FontAwesomeIcon
          onClick={() => props.handleDelete(props.vendor.id)}
          icon={faTrashAlt}
          style={{ color: "red" }}
          fixedWidth
        />
      </VendorDiv>
    );
}

Vendor.propType = {
  vendor: PropTypes.object.isRequired
};


const VendorDiv = styled.div`
  width: 100%;
  background: #fff;
  border-top: 2px solid rgb(238, 241, 244);
  border-bottom: 2px solid rgb(238, 241, 244);
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.0rem;
  padding: .8rem;
  p {
    font-weight: bold;
    text-align: left;
    margin-left: 1rem;
    vertical-align: bottom;
    align-self: flex-end;
  }
`;