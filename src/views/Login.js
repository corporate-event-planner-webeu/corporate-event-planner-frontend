import React from "react";
import { connect } from "react-redux";
import { login } from "../store/actions/auth";
import styled from "styled-components";
import GoogleLogin from "react-google-login";

const appId =
  "166782084422-7ri2398e2d8chhhnj883frh6ur7m50i1.apps.googleusercontent.com";

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

  responseGoogle = async response => {
    this.props.login(response.w3.U3, "Johnny555").then(res => {
      this.props.history.push("/dashboard");
    });
  };

  render() {
    return (
      <div>
        <LoginWrapperStyled>
          <div className="log-in">
            <h3>Log In</h3>
            <p>See all of your upcoming events </p>
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
              <button className="button" type="button" onClick={this.onLogin}>
                Log in
              </button>
              -------- OR ----------
              <GoogleLoginDiv>
                <GoogleLogin
                  clientId={appId}
                  buttonText="Log in with Google"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  className="loginwithgoogle"
                />
              </GoogleLoginDiv>
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

const GoogleLoginDiv = styled.div`
  display: flex;
  align-items: baseline;
`;

const LoginWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #FFFFFF;
  width: 100%;
  color: #333;
  align-items: center;

  
  .log-in{
    background: #EFEFEF;
    margin-top: 50px;
    padding: 3.5rem;
    height: 500px;
    width: 450px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    @media (max-width: 500px){
      width: 100%;
      padding: 2.5rem;
      height: 100vh;
      margin: 0 auto;
      justify-content: space-evenly;
    }

    p{
      font-size: 1.6rem;
      text-align: left;
    }
    h3{
      margin: 3rem auto;
      font-size: 2.4rem;
      font-family: Jaldi, sans-serif;
      text-align: left;
      font-weight: 700;
    }
  }
  
  input {
    border: 1px solid #F9F9F9;
    background: #FFFFFF;
    border-radius: 3px;
    padding-left: 10px;
    margin:10px 0;
    width: 100%;
    height: 48px;
    font-size: 1.6rem;
    color: #333;
    @media(max-width: 500px) {
      margin-top: 5px;
      border: none;
    }
    &::placeholder {
      color: #7a7a7a;
    }
  }

  .button {
    height: 48px;
    width: 100%;
    margin-top: 10px;
    font-size: 2rem;
    background: linear-gradient(135deg, #07a0c3 0%,#89bde5 100%);
    border: 1px solid #EFEFEF;
    color: #FFFFFF;
    border-radius: 3px;
    &:hover{
      border: 1px solid #07a0c3;
      color: #07a0c3;
      background: #FFFFFF;
      cursor: pointer;
      transition: 0.3s ease-out;
    }
  }
`;

const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
