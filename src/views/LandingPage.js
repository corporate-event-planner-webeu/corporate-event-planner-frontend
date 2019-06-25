import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function LandingPage() {
    return (
        <Hometyled>
            {/* <Navigation /> */}
            <div>
                <h1>Corporate Event Planner</h1>
                <p>An easy way to keep track of all the details and and people to coordinate the event </p>
                <p>Log in to see your upcoming events or sign up to get started!</p>
                <LinkStyled>
                <Link className="link" to='./login'>Log In</Link> 
                <Link className="link" to='./signup'>Sign Up Now!</Link> </LinkStyled>
            </div>
        </Hometyled>
    )
}

const Hometyled = styled.div`
    margin-top: 0;
    padding: 70px;
    background: linear-gradient(rgba(10, 10, 10), rgba(30, 30, 30, 0.1)), url("https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
    
;
`;

const LinkStyled = styled.div`
    /* margin: 40px;
    width: 100%; */

    .link{
        align-content: center;
        text-decoration: none;
        color: white;
        text-align: center;
        border: 1px solid white;
        border-radius: 10px;
        padding: 10px;
        margin-left: 50px;
        margin-top: 20px;
        width: 80%;
    }
    .link:hover{
        color: black;
        border-color: black;
        /* background-color: grey; */
    }
`;