import React from "react";
import { connect } from "react-redux";
import { login } from "../store/actions/auth";
import styled from "styled-components";

class Login extends React.Component {
  emailRef = React.createRef();
  passRef = React.createRef();

  onLogin = () => {
    const email = this.emailRef.current.value;
    const password = this.passRef.current.value;

    this.props.login(email, password).then(res => {
      this.props.history.push("/dashboard");
    });
  };

  render() {
    return (
      <div>
        <LoginWrapperStyled>
          <div className="style">
          <h3>Log In Here</h3>
          <InputStyled>
          <input
            type="text"
            name="Email"
            ref={this.emailRef}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            ref={this.passRef}
            placeholder="Password"
            required
          />
          <button type="button" onClick={this.onLogin}>
            Log in
          </button>
          </InputStyled>
          </div>
        </LoginWrapperStyled>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);

const LoginWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* padding: 1rem; */
  /* border: 2px solid white; */
  min-height: 100vh;
  /* background-color: #404040 ; */
  background-image: linear-gradient( #404040, white);
  width: 100%;
  /* background: linear-gradient(rgba(10, 10, 10), rgba(30, 30, 30, 0.1)), url("https://images.unsplash.com/6/blurred_lines.jpeg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"); */
  /* background-color: rgba(255, 255, 255, 0.6); */ 
  color: black;
  align-items: center;
  
  .style{
    background: #efefef;
    border: 1px solid grey;
    margin-top: 50px;
    height: 500px;
    width: 500px;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 10px 10px 6px -6px #777;
    box-shadow: 10px 10px 6px -6px #777;
  }
  
  input {
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 2px;
    padding-left: 10px;
    margin:10px;
    width: 220px;
    height: 50px;
    font-size: 2rem;
    -webkit-box-shadow: 10 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
  }

  button {
        height: 50px;
        width: 220px;
        margin-top: 10px;
        font-size: 2rem;
        -webkit-box-shadow: 0 10px 6px -6px #777;
        -moz-box-shadow: 0 10px 6px -6px #777;
        box-shadow: 0 10px 6px -6px #777;
    }
    button:hover{
      background: rgb(81,183,176);
      border: 1px solid rgb(81,183,176);
      color: white;
    }

    @media (max-width: 600px){
    .style {
      width: 100%;
      /* height: 580px; */
      height: 70rem;
      margin: 0 auto;
      justify-content: space-evenly;
    }
    input{
      border: 1px solid grey;
      width: 500px;
    }
    button{
      border: 1px solid grey;
      width: 500px;
    }
  }
`;

const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
