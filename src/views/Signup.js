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
            <h3>Sign Up Here</h3>
            <p>Sign up now and get started planning your next event!</p>
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
  background: rgb(233,236,240);
  width: 100%;
  color:black;
  align-items: center;

  .sign-up{
    background: white;
    border: 1px solid grey;
    margin-top: 50px;
    height: 700px;
    width: 500px;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    p{
      margin: 20px;
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
    margin: 10px;
    width: 350px;
    height: 50px;
    font-size: 1.5rem;
  }

  .button {
        height: 50px;
        width: 350px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 2rem;
        -webkit-box-shadow: 0 10px 6px -6px #777;
        -moz-box-shadow: 0 10px 6px -6px #777;
        box-shadow: 0 10px 6px -6px #777;
    }
    .button:hover{
      background: linear-gradient(135deg, #07a0c3 0%,#89bde5 100%);
      border: 1px solid #FFFFFF;
      color: #FFFFFF;
      transition: 0.3s ease-out;
    }

    @media (max-width: 500px){
      .sign-up {
      width: 100%;
      padding: 20px;
      min-height: 150vh;
      margin: 0 auto;
      justify-content: space-evenly;
    }
    input{
      border: 1px solid grey;
      margin-top: 5px;
      width: 100%;
    }
    .button{
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