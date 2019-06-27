import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signup } from "../store/actions/auth";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    password: ""
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
          <div className="sing-up">
          <h3>Sign Up Here</h3>
          <p>Sign up and get started planning your next event</p>
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
            <button type="button" onClick={this.handleSubmit}>
              Sign Up Now
            </button>
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
  { signup }
)(Signup);


const SignUpStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: rgb(233,236,240);
  width: 100%;
  color:black;
  align-items: center;

  .sing-up{
    background: white;
    border: 1px solid grey;
    margin-top: 50px;
    height: 700px;
    width: 500px;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    /* -moz-box-shadow: 10px 10px 6px -6px #777; */
    /* box-shadow: 10px 10px 6px -6px #777; */
    p{
      font-size:1.5rem;
    }
  }

  input {
    border: 1px solid grey;
    border-radius: 2px;
    padding-left: 10px;
    margin: 10px;
    width: 350px;
    height: 50px;
    font-size: 2rem;
    /* -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777; */
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
      background: rgb(81,183,176);
      border: 1px solid rgb(81,183,176);
    }

    @media (max-width: 600px){
      .sing-up {
      width: 100%;
      padding-left:20px;
      padding-right: 15px;
      /* height: 580px; */
      /* padding-left: 20px; */
      height: 70rem;
      margin: 0 auto;
      justify-content: space-evenly;
    }
    input{
      border: 1px solid grey;
      margin-top: 5px;
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