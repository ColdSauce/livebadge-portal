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
      <div className="parent">
        <form onSubmit={this.handleSubmit}>
          <input className="text" placeholder="Description" type="text" value={this.state.location} onChange={this.handleDescriptionChange} />
          <br/><br/>
          <input className="text" placeholder="Rarity" type="text" value={this.state.name} onChange={this.handleRarityChange} />
          <br/><br/>
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}
