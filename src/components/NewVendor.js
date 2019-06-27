import React, { Component } from "react";
import styled from "styled-components";

export default class NewTodo extends Component {
  state = {
    name: '',
    number: '',
    email: '',
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

handleSubmit = async (e) => {
  e.preventDefault();
  const data = {
    vendor_name: this.state.name,  	
    contact_number: this.state.number,   
    contact_email: this.state.email,
  }
  await this.props.handleSubmit(data);
  await this.setState({name:'',number:'', email:''})
}

  render() {
    return (
      <NewVendorDiv>
        <input type="text" name="name" placeholder="Vendor Name" value={this.state.name} onChange={this.handleChange}/>
        <input type="text" name="email" placeholder="Vendor Email" value={this.state.email} onChange={this.handleChange}/>
        <input type="text" name="number" placeholder="Vendor Number" value={this.state.number} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Save</button>
      </NewVendorDiv>
    );
  }
}


const NewVendorDiv = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  input {
    padding: 1rem;
    width: 60%;
    max-height: 10px;
    font-size: 14px;
    flex: 8;
    margin-bottom: 1rem;
    border: 1px solid rgb(186, 192, 198);
    vertical-align: top;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 1rem;
    max-height: 43.5px;
    background: rgb(81, 183, 176);
    color: white;
    outline: none;
    border: none;
    flex: 1;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
`;