import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RForm from '../../sections/RForm'
import * as FontAwesome from 'react-icons/lib/fa'


class Concert extends Component {
	render() {
    return(
    	<div>
    	    <a href="/"><FontAwesome.FaArrowLeft className="back"/></a>
    	    <RForm>
      		</RForm>
    	</div>
	  )
	};  
}

export default Concert;
