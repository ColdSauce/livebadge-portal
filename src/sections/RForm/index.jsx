import React, { Component } from 'react';
import './App.css';

export default class ConcertForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: ""
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState(
      {
        ...this.state,
        name: event.target.value
      }
    );
  }

  handleLocationChange(event) {
    this.setState(
      {
        ...this.state,
        location: event.target.value
      }
    );
  }


  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name + ", " + this.state.location);
    event.preventDefault();
  }
  
  render() {
    return (
      <div className="parent">
        <form onSubmit={this.handleSubmit}>
          <input className="text" placeholder="Name" type="text" value={this.state.name} onChange={this.handleNameChange} />
          <br/><br/>
          <input className="text" placeholder="Location" type="text" value={this.state.location} onChange={this.handleLocationChange} />
          <br/><br/>
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}
