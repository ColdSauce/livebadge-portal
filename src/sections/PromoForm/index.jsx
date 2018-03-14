import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import ColladaLoader from 'three-collada-loader';
import Scene from '../../utils/ThreeComponent';

export default class PromoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      rarity: "",
      qrCode: "",
      modelBlob: ""
    };

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleRarityChange = this.handleRarityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onDrop = acceptedFiles => {
    console.log(acceptedFiles[0].preview)
    this.setState({
      ...this.state,
      modelBlob: acceptedFiles[0].preview
    });
  };

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
        {this.state.modelBlob &&
        <Scene daeModel={this.state.modelBlob}>
        </Scene>
        }
        <form onSubmit={this.handleSubmit}>
        
          <Dropzone
          id="eventLogo"
          className="dropZone"
          activeClassName="dropZoneActive"
          onDrop={this.onDrop}
          >
          </Dropzone>
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
