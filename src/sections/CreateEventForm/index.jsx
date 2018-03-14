import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import { uploadImage } from '../../utils/Mixtape';
import './App.css';
import * as FontAwesome from 'react-icons/lib/fa';

export default class CreateEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      badgeData: "",
      eventLogoData: "",
      eventName: "",
      submitText: "Create"
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onDropBadge = acceptedFiles => {
    this.setState({
      badgeData: acceptedFiles[0].preview
    });
  };

  onDropLogo = acceptedFiles => {
    this.setState({
      eventLogoData: acceptedFiles[0].preview
    });
  };

  handleNameChange(event) {
    this.setState({
      ...this.state,
      eventName: event.target.value
    });
  }

  handleSubmit(event) {
    console.log(this.state.badgeData);
    fetch(this.state.eventLogoData)
      .then(res => res.blob()) // Gets the response and returns it as a blob
      .then(blob => {
        uploadImage(blob, this.state.eventName + "LOGO");
        this.setState({
          ...this.state,
          submitText: "Created!"
        });
      });
    window.eventId = this.state.eventName;

    event.preventDefault();
    window.location = ("/app");
  }

  render() {
    return (
      <div className="parent">
        <input className="text" type="text" placeholder="Event Name" value={this.state.eventName} onChange={this.handleNameChange} />
        <br />
        <h1>{this.state.badgeData == "" ? 'Badge Graphic' : 'Upload Sucessful'}</h1>
        <Dropzone
          id="badge"
          className="dropZone"
          activeClassName="dropZoneActive"
          onDrop={this.onDropBadge}
        >
          <FontAwesome.FaDownload className="download"/>
        </Dropzone>
        <br />
        <h1>{this.state.eventLogoData == "" ? 'Event Logo' : 'Upload Sucessful'}</h1>
        <Dropzone
          id="eventLogo"
          className="dropZone"
          activeClassName="dropZoneActive"
          onDrop={this.onDropLogo}
        >
          <FontAwesome.FaDownload className="download"/>
        </Dropzone>
        <br /><br />
        <button className="button" onClick={this.handleSubmit}> {this.state.submitText} </button>
      </div>
    );
  }

}
