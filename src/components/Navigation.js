import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return(
        <HeaderStyled>
            <h2>Event Planner</h2>
               <MenuStyled>
                <ul>
                    <Link className="link" to='/'>Home</Link>
                    <Link className="link" to='/'>About</Link>
                    <Link className="link " to='./login'>Log In</Link>
                    <Link className="link " to='./signup'>Sign up</Link>

                </ul>
                </MenuStyled>
        </HeaderStyled>
    )
}
const HeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    vertical-align: center;
    background-color: rgb(233,236,240);
    color: black;
    /* margin:0px; */
    /* height: 100%; */
    /* padding-left: 5px;
    padding-right:5px; */
        h2{
            padding-left: 20px;
        }
`;

const MenuStyled = styled.div`
    ul{
        margin-top: 35px;
    }
    .link{
        align-content: center;
        text-decoration: none;
        color: black;
        text-align: center;
        padding-right: 40px;
        /* padding-bottom: 20px; */
        padding-left: 40px;
        margin-top: 40px;
    }
     .login {
        border: 1px solid black; 
        border-radius: 10px; 
        width: 20%;
        padding: 5px 0px 5px 0px;
        padding-bottom:0;
    }
`;

