import React from 'react';
import styled from 'styled-components';

export default function Navigation() {
    return(
        <HeaderStyled>
            <h2>Event Planner</h2>
            {/* <img class="menu-button" src="https://cdn3.iconfinder.com/data/icons/mobile-friendly-ui/100/menu-512.png" ></img> */}
               <MenuStyled>
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>log in</li>
                    <li>sign up</li>
                </ul>
                </MenuStyled>
        </HeaderStyled>
    )
}
const HeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #efefef;
    color: black;
    margin:0;
    padding:40px;
`;

const MenuStyled = styled.div`
    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
        
    li{
    list-style-type: none;
    margin: 20x;
    padding: 20px;
}
`;