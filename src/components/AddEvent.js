import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import PropTypes from 'prop-types';

export default class AddEvent extends Component {
  state = {
    title: "",
    description: "",
    budget: "",
    attendees: "",
    date: "",
    time: "",
    url:
      "https://res.cloudinary.com/ogwurujohnson/image/upload/v1561643304/bjc5fbdksvte293pnhdl.jpg"
  };

  abortController = new AbortController();

  componentWillReceiveProps() {
    this.setState({
      title: this.props.data ? this.props.data.event_title : "",
      description: this.props.data ? this.props.data.event_description : "",
      budget: this.props.data ? this.props.data.budget : "",
      attendees: this.props.data ? this.props.data.attendees : "",
      date: this.props.data ? this.props.data.event_date : "",
      time: this.props.data ? this.props.data.event_time : "",
      url: this.props.data
        ? this.props.data.image_url
        : "https://res.cloudinary.com/ogwurujohnson/image/upload/v1561643304/bjc5fbdksvte293pnhdl.jpg"
    });
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const data = {
      event_title: this.state.title,
      event_description: this.state.description,
      event_date: this.state.date,
      event_time: this.state.time,
      attendees: this.state.attendees,
      budget: this.state.budget,
      image_url: this.state.url
    };
    this.props.handleSubmit(data);
    this.setState({
      title: "",
      description: "",
      date: "",
      time: "",
      attendees: "",
      budget: "",
      url:
        "https://res.cloudinary.com/ogwurujohnson/image/upload/v1561643304/bjc5fbdksvte293pnhdl.jpg"
    });
  };

  handleEdit = id => {
    const data = {
      event_title: this.state.title,
      event_description: this.state.description,
      event_date: this.state.date,
      event_time: this.state.time,
      attendees: this.state.attendees,
      budget: this.state.budget,
      image_url: this.state.url
    };
    this.props.handleUpdateSubmit(id, data);
    this.setState({
      title: "",
      description: "",
      date: "",
      time: "",
      attendees: "",
      budget: "",
      url:
        "https://res.cloudinary.com/ogwurujohnson/image/upload/v1561643304/bjc5fbdksvte293pnhdl.jpg",
      uploadingImage: ""
    });
  };

  handleImageUpload = e => {
    const file = e.target.files[0];
    const CLOUDINARY_URL =
      "https://api.cloudinary.com/v1_1/ogwurujohnson/image/upload";
    const CLOUDINARY_UPLOAD_PRESET = "zjjd4c1v";
    this.setState({ uploadingImage: true });
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    axios
      .post(CLOUDINARY_URL, formData)
      .then(res => {
        if (res.data.secure_url !== "") {
          const uploadedFileUrl = res.data.secure_url;
          console.log(uploadedFileUrl);
          this.setState({
            url: uploadedFileUrl,
            uploadingImage: false
          });
        } else {
        }
      })
      .catch(err => {});
  };

  render() {
    return (
      <AddEventDiv>
        <h2>Create Event</h2>

        <input type="file" id="fileupload" onChange={this.handleImageUpload} />

        <input
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          type="text"
          placeholder="Event Title"
        />
        <input
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
          type="text"
          placeholder="Event Description"
        />
        <input
          name="budget"
          value={this.state.budget}
          onChange={this.handleChange}
          type="text"
          placeholder="Budget"
        />
        <input
          name="attendees"
          value={this.state.attendees}
          onChange={this.handleChange}
          type="text"
          placeholder="Number of Attendees"
        />
        <input
          name="date"
          value={this.state.date}
          onChange={this.handleChange}
          type="text"
          placeholder="Event Date"
        />
        <input
          name="time"
          value={this.state.time}
          onChange={this.handleChange}
          type="text"
          placeholder="Event Time"
        />

        <button
          onClick={() =>
            this.props.data
              ? this.handleEdit(this.props.data.id)
              : this.handleSubmit()
          }
        >
          {this.state.uploadingImage ? "Uploading..." : "Create Event"}
        </button>
      </AddEventDiv>
    );
  }
}

AddEvent.propTypes = {
  data: PropTypes.object
}

AddEvent.defaultProps = {
  data: {}
}

const AddEventDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  width: 350px;
  background: #F9F9F9;
  box-shadow: 0 16px 48px rgba(32, 41, 50, 0.21);
  padding: 2rem;
  @media(max-width: 800px) {
    width: 95%;
    margin: 0;
  }
  
  h2 {
  font-family: Overpass, sans-serif;
  font-size: 2rem;
  }

  p {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
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

  button {
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

  @media (max-width: 500px){
    width: 90%;
    height: 600px;
    padding-right: 10px;
    margin-right: 10px;
  }
`;
