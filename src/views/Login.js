import React from 'react';
import { connect } from 'react-redux';
import { login } from '../store/actions/auth';
import styled from 'styled-components';


class Login extends React.Component {
    emailRef = React.createRef();
    passRef = React.createRef();

    onLogin = () => {
        const email = this.emailRef.current.value;
        const password = this.passRef.current.value;

        this.props.login(email, password)
            .then(() => {
                this.props.history.push('/dashboard')
            })
    }

    render(){
        return(
            <div>
                <LoginWrapperStyled> 
                    <h3>Log In Here</h3> 
                    <input type="email" name="Email" ref={this.emailRef} placeholder="Email" required />
                    <input type="password" name="password" ref={this.passRef} placeholder="Password" required />
                    <button type="button" onClick={this.onLogin}>Log in</button>
                </LoginWrapperStyled>
            </div>
        )
    }
}


export default connect(
    null,
    { login }
)(Login);


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

// const ButtonStyled = styled.button`
//         width: 220px;
//         font-size: 20px;
//         background: white;
// `;