import React, { Component } from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <label>
          Location:
          <input type="text" value={this.state.location} onChange={this.handleLocationChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }

}
