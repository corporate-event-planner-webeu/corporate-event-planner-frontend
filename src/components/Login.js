import React from 'react';
import styled from 'styled-components';

export default class Login extends React.Component {
    render(){
        return(
            <LoginWrapperStyled> 
                <h3>Log in here</h3>
                <input type="text" name="Email" placeholder="Email" required />
                <input type="passowrd" name="password" placeholder="Password" required />
                <button>Log in </button>
            </LoginWrapperStyled>
        )
    }
}

const LoginWrapperStyled = styled.form`
    border: 3px solid black;
    padding: 50px;
    background: #efefef;
    color: black;
    
    button{
        font-size:13px;
    }

`; 
