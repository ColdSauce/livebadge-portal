import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateEventForm from '../../sections/CreateEventForm'
import Dropzone from 'react-dropzone'


class CreateEvent extends Component {
  onDropLogo = acceptedFiles => {
    this.setState({
      eventLogoData: acceptedFiles[0].preview
    });
  };

	render() {
    return(
      <CreateEventForm>
      </CreateEventForm>
	  )
	};  
}


export default CreateEvent;
