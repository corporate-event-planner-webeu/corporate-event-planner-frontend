import React from 'react';
import styled from 'styled-components';

import Loader from "react-loader-spinner";
export default class Loaderr extends React.Component {
  render() {
    return (
      <LoaderWrapper>
        <Loader type="Rings" color="#36D7B7" height="500" width="700" />
      </LoaderWrapper>
    );
  }
}


const LoaderWrapper = styled.div`
 width: 1000%;
 height: 1000%;
 position: relative;
 z-index: 9999999;
`;