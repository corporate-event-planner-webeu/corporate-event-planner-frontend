import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function Navigation() {
    return(
        <HeaderStyled>
            <h2>Event Planner</h2>
            {/* <img class="menu-button" src="https://cdn3.iconfinder.com/data/icons/mobile-friendly-ui/100/menu-512.png" ></img> */}
               <MenuStyled>
                {/* <ul> */}
                    <Link className="link" to='/'>Home</Link>
                    <Link className="link" to='/'>About</Link>
                    <Link className="link" to='./login'>Log In</Link> 
                {/* </ul> */}
                </MenuStyled>
        </HeaderStyled>
    )
}
const HeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #efefef;
    color: black;
    margin:0px;
    padding-left: 5px;
    padding-right:5px;

    
`;

const MenuStyled = styled.div`
    /* ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    } */
    .link{
        align-content: center;
        text-decoration: none;
        color: black;
        text-align: center;
        /* border: 1px solid black; */
        border-radius: 10px;
        padding: 10px;
        margin-left: 50px;
        margin-top: 20px;
        width: 80%;
    }
`;

