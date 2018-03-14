import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import { uploadImage } from '../../utils/Mixtape';
import './App.css';

export default class CreateEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      badgeData: "",
      eventLogoData: "",
      eventName: ""
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
      });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <span> Name </span>
        <input type="text" value={this.state.eventName} onChange={this.handleNameChange} />
        <Dropzone
          id="badge"
          className="dropZone"
          activeClassName="dropZoneActive"
          onDrop={this.onDropBadge}
        >
        </Dropzone>
        <img src={this.state.badgeData}/>
        <Dropzone
          id="eventLogo"
          className="dropZone"
          activeClassName="dropZoneActive"
          onDrop={this.onDropLogo}
        >
        </Dropzone>

        <img src={this.state.eventLogoData}/>
        <button onClick={this.handleSubmit}> Create </button>
      </div>
    );
  }

}
