import React from 'react';
import styled from 'styled-components';

export default function Footer(){
    return(
        <FooterStyled>
            Footer!
        </FooterStyled>
    )
}


const FooterStyled = styled.div`
    margin: 0px;
    padding: 70px;
    background-color: #efefef;
    color: black;
`;