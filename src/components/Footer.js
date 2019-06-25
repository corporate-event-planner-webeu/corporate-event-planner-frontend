import React from 'react';
import styled from 'styled-components';

export default function Footer(){
    return(
        <BottomStyled>
            <FooterStyled>
                <h4>Contact</h4>
                <p>Phone: <span>012345678</span></p>
                <p>Email: <span>example@gmail.com</span></p>
            </FooterStyled>
            <FooterStyled>
                <h4>Social</h4>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Facebook</p>
            </FooterStyled>
            {/* <FooterStyled>
                <h4>Reviews</h4>
                <p>Such a great app</p>
                <p>It was so easy to make coordinate the event, I was so worried at first</p>
                <p>My family wanted to sign up for this app as well! </p>
            </FooterStyled> */}
        </BottomStyled>
    )
}


const BottomStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0px;
    padding: 30px;
    background-color: #efefef;
    color: black;
`;
const FooterStyled = styled.div`
    display: flex;
    flex-direction: column;
   
`