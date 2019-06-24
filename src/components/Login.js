import React from 'react';
import styled from 'styled-components';

export default class Login extends React.Component {
    render(){
        return(
            <LoginWrapperStyled> 
                <h3>Log in here</h3>
                <div>
                <input type="text" name="name" placeholder="Name" required />
                </div>
                <div>
                <input type="passowrd" name="password" placeholder="Password" required />
                </div>
            </LoginWrapperStyled>
        )
    }
}

const LoginWrapperStyled = styled.form`
    border: 3px solid black;
    padding: 100px;
    background: #efefef;
    color: black;
    
`; 