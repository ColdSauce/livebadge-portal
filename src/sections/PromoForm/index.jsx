import React, { Component } from 'react';

export default class PromoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      rarity: "",
      qrCode: ""
    };

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleRarityChange = this.handleRarityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDescriptionChange(event) {
    this.setState(
      {
        ...this.state,
        description: event.target.value
      }
    );
  }

  handleRarityChange(event) {
    this.setState(
      {
        ...this.state,
        rarity: event.target.value
      }
    );
  }


  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.rarity + ", " + this.state.description);
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Description:
          <input type="text" value={this.state.location} onChange={this.handleDescriptionChange} />
        </label>
        <label>
          Rarity:
          <input type="text" value={this.state.name} onChange={this.handleRarityChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }

}
