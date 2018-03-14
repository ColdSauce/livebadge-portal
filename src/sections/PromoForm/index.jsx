import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import ColladaLoader from 'three-collada-loader';
import Scene from '../../utils/ThreeComponent';
import * as FontAwesome from 'react-icons/lib/fa';

export default class PromoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      rarity: "",
      qrCode: "",
      modelBlob: "",
      mtlBlob: ""
    };

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleRarityChange = this.handleRarityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onDropModel = acceptedFiles => {
    console.log(acceptedFiles[0].preview)
    this.setState({
      ...this.state,
      modelBlob: acceptedFiles[0].preview
    });
  };

  onDropMtl = acceptedFiles => {
    console.log(acceptedFiles[0].preview)
    this.setState({
      ...this.state,
      mtlBlob: acceptedFiles[0].preview
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
        {this.state.modelBlob && this.state.mtlBlob &&
        <Scene daeModel={this.state.modelBlob}>
        </Scene>
        }
        <form onSubmit={this.handleSubmit}>
          <h1>Drop OBJ</h1>
          <Dropzone
          id="modelZone"
          className="dropZone"
          activeClassName="dropZoneActive"
          onDrop={this.onDropModel}
          >
            <FontAwesome.FaDownload className="download"/>
          </Dropzone>
          <h1>Drop MTL</h1>
          <Dropzone
          id="mtlZone"
          className="dropZone"
          activeClassName="dropZoneActive"
          onDrop={this.onDropMtl}
          >
            <FontAwesome.FaDownload className="download"/>
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
