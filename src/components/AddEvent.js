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
        <p>Create Event</p>

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
  border-top: 2px solid teal;
  display: flex;
  flex-direction: column;
  height: 600px;
  margin: 2rem;
  margin-right: 0;
  width: 25%;
  background: #fff;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
  padding: 2rem;

  p {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }

  input {
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid rgb(186, 192, 198);
    width: 90%;
    margin-left: 1rem;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 1rem;
    max-height: 43.5px;
    background: rgb(81, 183, 176);
    color: white;
    flex: 1;
    outline: none;
    border: none;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    width: 90%;
    margin: 1.4rem;
  }

  @media (max-width: 500px){
    width: 100%;
    padding-right: 10px;
    margin-right: 10px;
  }
`;
