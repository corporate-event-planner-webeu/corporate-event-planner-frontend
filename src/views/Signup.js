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
          </form>
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
  padding: 50px;
  background: #efefef;
  color: black;
  margin: 20px;
  margin-bottom: 20px;

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
        width: 150px;
        font-size: 2rem;
        -webkit-box-shadow: 0 10px 6px -6px #777;
        -moz-box-shadow: 0 10px 6px -6px #777;
        box-shadow: 0 10px 6px -6px #777;
    }
`;

