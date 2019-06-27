import React, { Component } from 'react'
import styled from 'styled-components';
import PropTypes from "prop-types";


export default class NewTodo extends Component {
  constructor(props){
    super(props)
    this.state = {
        title: ''
    }
    this.props = props;
  }
    componentWillReceiveProps(){
      this.props.title ? this.setState({ title: this.props.title }) : this.setState({ title: '' })
    }
   
    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) => {
      // e.preventDefault();
      const data = {
        task_name: this.state.title,
        task_completed: false
      }
      await this.props.handleNewTodo(data)
      // await this.setState({title: ''})
    }

    handleUpdatedData = (id) => {
      const data = {
        task_name: this.state.title,
        task_completed: false
      }
      this.props.completeUpdate(id, data)
    }
    
    render() {
        return (
            <NewTodoDiv>
                <input value={this.state.title} onChange={this.handleChange} name="title" type="text" placeholder="Todo Title" />
                <button onClick={() => this.props.title ? this.handleUpdatedData(this.props.id) : this.handleSubmit()}>Save</button>
            </NewTodoDiv>
        )
    }
}

NewTodo.propTypes = {
  title: PropTypes.string.isRequired
}


const NewTodoDiv = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  input {
    padding: 2rem;
    flex: 8;
    height: 5px;
    font-size: 14px;
    margin-bottom: 1rem;
    border: 1px solid rgb(186, 192, 198);
    vertical-align: top;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 0.8rem;
    max-height: 41.5px;
    background: rgb(81, 183, 176);
    color: white;
    flex: 1;
    outline: none;
    border: none;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
`;