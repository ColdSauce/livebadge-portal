import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PromoForm from '../../sections/PromoForm'
import * as FontAwesome from 'react-icons/lib/fa'

class Promotion extends Component {
	render() {
    return(
      <div>
      	<a href="/"><FontAwesome.FaArrowLeft className="back"/></a>
        <PromoForm>
        </PromoForm>
      </div>
	  )
	};  
}

export default Promotion;
