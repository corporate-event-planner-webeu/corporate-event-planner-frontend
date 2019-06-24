import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { signup } from "../actions/auth";

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
      role: 'user'
    };

    await this.setState({
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      password: ""
    });

    this.props.signup(credential)
    .then(() => {
      this.props.history.push('/login')
    })
  
  };

  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <SignUpStyled>
        <h3>Sign Up Here</h3>
        <form>
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
            type="text"
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
          <ButtonStyled type="button" onClick={this.handleSubmit}>Sign Up Now</ButtonStyled>
        </form>
      </SignUpStyled>
    );
  }
}

export default connect(
  null,
  { signup }
)(Signup);

const SignUpStyled = styled.div`
  border: 1px solid white;
  border-radius: 2px;
  padding: 50px;
  background: #efefef;
  color: black;
  margin: 20px;
  margin-bottom: 20px;

  input {
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 2px;
    padding-left: 10px;
    margin: 10px;
    width: 220px;
    height: 30px;
  }
`;

const ButtonStyled = styled.button`
  width: 220px;
  font-size: 20px;
  background: white;
`;
