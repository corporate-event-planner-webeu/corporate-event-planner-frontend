import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signup,login } from "../store/actions/auth";
import GoogleLogin from "react-google-login";

const appId =
  "166782084422-7ri2398e2d8chhhnj883frh6ur7m50i1.apps.googleusercontent.com";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    password: ""
  };

  responseGoogle = async response => {
    const credential = {
      email: response.w3.U3,
      first_name: response.w3.ofa,
      last_name: response.w3.wea,
      password: "Johnny555",
      company: "TEst",
      role: "user"
    };
    // const loginData = {
    //   email: response.w3.U3,
    //   password: "Johnny555"
    // }
    this.props.signup(credential).then(() => {
      this.props.login(response.w3.U3, "Johnny555").then(res => {
        this.props.history.push("/dashboard");
      });
    });
  };

  handleSubmit = async () => {
    const credential = {
      email: this.state.email,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      password: this.state.password,
      company: this.state.companyName,
      role: "user"
    };

    await this.setState({
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      password: ""
    });

    this.props.signup(credential).then(() => {
      this.props.history.push("/login");
    });
  };

  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <SignUpStyled>
          <div className="sign-up">
            
            <h3>Sign Up</h3>
            <p>Get started planning your next event!</p>
            <form>
              <InputStyled>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  placeholder="First name"
                />
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  placeholder="Last name"
                />
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="companyName"
                  value={this.state.companyName}
                  placeholder="Company name"
                />
                <input
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="Email"
                />
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                />
                <button className="button" type="button" onClick={this.handleSubmit}>
                  Sign Up Now
                </button>
                -------- OR ----------
                <GoogleLoginDiv>
                  <GoogleLogin
                    clientId={appId}
                    buttonText="Sign up with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    className="loginwithgoogle"
                  />
                </GoogleLoginDiv>
              </InputStyled>
            </form>
          </div>
        </SignUpStyled>
      </div>
    );
  }
}

export default connect(
  null,
  { signup,login }
)(Signup);

const GoogleLoginDiv = styled.div`
  display: flex;
  align-items: baseline;
`;

const SignUpStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #FFFFFF;
  width: 100%;
  color: #333;
  align-items: center;

  .sign-up{
    background: #EFEFEF;
    margin-top: 50px;
    padding: 3.5rem;
    width: 450px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    @media(max-width: 500px) {
      width: 100%;
      padding: 2.5rem;
      height: 100vh;
      margin: 0 auto;
      justify-content: space-evenly;
    }
    p{
      text-align: left;
      font-size: 1.6rem;
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
    margin: 10px 0;
    width: 100%;
    height: 48px;
    font-size: 1.6rem;
    color: #333;
    @media(max-width: 500px) {
      margin-top: 5px;
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
    &:hover {
      cursor: pointer;
      background: #FFFFFF;
      border: 1px solid #07a0c3;
      color: #07a0c3;
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
