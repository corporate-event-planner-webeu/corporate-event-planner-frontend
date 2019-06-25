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
    background-color: rgb(19, 28, 36);
    color: white;
    /* margin:0px; */
    height: 60px;
    /* padding-left: 5px;
    padding-right:5px; */
    h2{
        margin: 15px 0;
        padding-left: 20px;
        font-size: 2.5rem;
    }
`;

const MenuStyled = styled.div`
    ul{
        margin: 15px 0;
    }
    .link{
        align-content: center;
        text-decoration: none;
        color: white;
        text-align: center;
        padding-right: 40px;
        /* padding-bottom: 20px; */
        padding-left: 40px;
        /* margin-top: 40px; */
        font-size: 2rem;
    }
     .login {
        /* border: 1px solid black;  */
        /* border-radius: 10px;  */
        width: 20%;
        padding: 5px 0px 5px 0px;
        padding-bottom:0;
    }
`;

