import React, { Component } from 'react';
import { addConcert, getAuthenticatedUser } from '../../utils/Mixtape';
import './App.css';

export default class ConcertForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      submitText: "Submit"
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
    const user = getAuthenticatedUser()
    if (user) {
      addConcert(user.uid, window.eventId, this.state.name, this.state.location);
      this.setState({
        ...this.state,
        submitText: "Submitted!",
        name: "",
        location: ""
      });
    }
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
          <input className="button" type="submit" value={this.state.submitText} />
        </form>
      </div>
    );
  }

}
