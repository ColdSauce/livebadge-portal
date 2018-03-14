import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getUserSnapshot } from '../../utils/Mixtape'

class EventManagement extends Component {

  componentDidMount() {
    setTimeout(() => getUserSnapshot(), 500)
  }

	render() {

    return(
      <div>
        
      </div>
	  )
	};  
}

export default EventManagement;
