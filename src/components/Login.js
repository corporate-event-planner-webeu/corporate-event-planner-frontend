import React from 'react';
import styled from 'styled-components';

export default class Login extends React.Component {

    render(){
        return(
            <div>
                <SignUpStyled>
                    <h3>Sign Up Here</h3>
                    <form>
                        <input type="text" name="name" placeholder="Firt name" />
                        <input type="text" name="name" placeholder="Last name" />
                        <input type="text" name="email" placeholder="Email" />
                        <input type="text" name="name" placeholder="Password" />
                        <button>Sign Up Now</button>
                    </form>
                </SignUpStyled>

                <LoginWrapperStyled> 
                    <h3>Log In Here</h3> 
                    <input type="text" name="Email" placeholder="Email" required />
                    <input type="passowrd" name="password" placeholder="Password" required />
                    <div><button>Log in </button></div>
                </LoginWrapperStyled>
            </div>
        )
    }
}
const SignUpStyled = styled.form`
    border: 1px solid white;
    padding: 50px;
    background: #efefef;
    color: black;
    margin-bottom: 20px;

    input {
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 2px;
        padding-left: 10px;
        margin:10px;
        width: 220px;
        height: 30px;
    }
    button {
        width: 220px;
        font-size: 20px;
        background: white;
    }
`;

const LoginWrapperStyled = styled.form`
    border: 1px solid white;
    padding: 50px;
    background: #efefef;
    color: black;

    input {
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 2px;
        padding-left: 10px;
        margin:10px;
        width: 220px;
        height: 30px;
    }
    button {
        width: 220px;
        font-size: 20px;
        background: white;
    }

`; 
