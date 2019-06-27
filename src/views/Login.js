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
          <div className="log-in">
          <h3>Log In Here</h3>
          <p>To see all of your upcoming events </p>
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
  min-height: 100vh;
  background: rgb(233,236,240);
  width: 100%;
  color: black;
  align-items: center;
  
  .log-in{
    background: white;
    border: 1px solid grey;
    margin-top: 50px;
    height: 500px;
    width: 500px;
    -webkit-box-shadow: 0 10px 6px -6px #777; 

    p{
      font-size: 1.7rem;
    }
    h3{
      margin: 30px;
      font-size: 2rem;
    }
  }
  
  input {
    border: 1px solid grey;
    border-radius: 2px;
    padding-left: 10px;
    margin:10px;
    width: 350px;
    height: 50px;
    font-size: 1.5rem;
  }

  button {
        height: 50px;
        width: 350px;
        margin-top: 10px;
        font-size: 2rem;
        -webkit-box-shadow: 0 10px 6px -6px #777;
        -moz-box-shadow: 0 10px 6px -6px #777;
        box-shadow: 0 10px 6px -6px #777;
    }
    button:hover{
      background: linear-gradient(135deg, #07a0c3 0%,#89bde5 100%);
      border: 1px solid #FFFFFF;
      color: #FFFFFF;
      transition: 0.3s ease-out;
    }

    @media (max-width: 500px){
    .log-in {
      width: 100%;
      padding: 20px;
      min-height: 150vh;
      margin: 0 auto;
      justify-content: space-evenly;
    }
    input{
      border: 1px solid grey;
      width: 100%;
    }
    button{
      border: 1px solid grey;
      width: 100%;
    }
  }
`;

const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
