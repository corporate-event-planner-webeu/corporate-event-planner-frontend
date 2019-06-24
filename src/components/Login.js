import React from 'react';
import styled from 'styled-components';

export default class Login extends React.Component {

    render(){
        return(
            <div>
                <LoginWrapperStyled> 
                    <h3>Log In Here</h3> 
                    <input type="text" name="Email" placeholder="Email" required />
                    <input type="passowrd" name="password" placeholder="Password" required />
                    <ButtonStyled>Log in</ButtonStyled>
                </LoginWrapperStyled>
            </div>
        )
    }
}

const LoginWrapperStyled = styled.form`
    border: 1px solid white;
    border-radius: 2px;
    padding: 50px;
    background: #efefef;
    color: black;
    margin: 20px;

    input {
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 2px;
        padding-left: 10px;
        margin:10px;
        width: 220px;
        height: 30px;
    }
`; 

const ButtonStyled = styled.button`
        width: 220px;
        font-size: 20px;
        background: white;
`;