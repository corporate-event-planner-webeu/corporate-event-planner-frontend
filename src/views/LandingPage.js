import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from'../components/Footer';

export default function LandingPage() {
    return (
        <div>    
            <Homestyled>
                    <div className="text">
                        <h1>Corporate Event Planner</h1>
                        <p>An easy way to keep track of all the details and and people to coordinate the event </p>
                        <p>Log in to see your upcoming events or sign up to get started!</p>
                        </div>
                        <LinkStyled>
                        <Link className="link" to='./login'>Log In</Link> 
                        <Link className="link" to='./signup'>Sign Up Now!</Link> 
                        </LinkStyled>
            </Homestyled>
            <Footer/>
        </div>
    )
}

const Homestyled = styled.div`
    color: black;
    font-size: 2rem;
    line-height:20px;
    background-color: white;
    text-align: center;
    width: 100%;
    padding-bottom: 20px;
   
    .text{
        padding:16px 24px 16px 80px;
        display:flex;
        flex-direction: column;
        padding-bottom: 25px;
        
    };
`;

const LinkStyled = styled.div`

    .link{
        align-content: center;
        text-decoration: none;
        color: black;
        text-align: center;
        border: 1px solid black;
        border-radius: 10px;
        padding: 10px;
        margin-left: 50px;
        margin-top: 20px;
        margin-bottom: 20px;
        width: 80%;
    }
    .link:hover{
        color: yellow;
        border-color: black;
    }
`;