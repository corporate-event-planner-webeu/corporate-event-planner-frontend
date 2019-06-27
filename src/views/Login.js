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
        </LoginWrapperStyled>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);

const LoginWrapperStyled = styled.form`
  /* border: 1px solid white;
  border-radius: 2px; */
  /* align-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background: #efefef;
  color: black;
  margin: 20px;
  width: 70%; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  padding: 1rem;
  border: 2px solid white;
  min-height: 100vh;
  background-color: #efefef;
  width: 100%;
  /* background-color: rgb(233, 236, 240); */
  color:black;
  align-items: center;
  

  input {
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 2px;
    padding-left: 10px;
    margin:10px;
    width: 220px;
    height: 50px;
    font-size: 2rem;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
  }
  button {
        height: 50px;
        width: 100px;
        font-size: 2rem;
        -webkit-box-shadow: 0 10px 6px -6px #777;
        -moz-box-shadow: 0 10px 6px -6px #777;
        box-shadow: 0 10px 6px -6px #777;
    }
    button:hover{
      background: rgb(81,183,176);
      border: 1px solid rgb(81,183,176);
    }
`;

const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;