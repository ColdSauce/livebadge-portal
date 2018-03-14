import React, { Component } from 'react';
import * as THREE from 'three';
import OBJLoader from 'three-obj-loader';
OBJLoader(THREE);


// Please stop what you're doing and never look at this code.
// It's the worst code I have ever stiched together, in a disgusting fashion.
//
// *cough* it's ~~ obfuscated ~~ *cough* 

class Scene extends Component {
  constructor(props) {
    super(props)
    
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

	fitCameraToObject ( camera, object, offset, controls ) {

    offset = offset || 1.25;

    const boundingBox = new THREE.Box3();

    // get bounding box of object - this will be used to setup controls and camera
    boundingBox.setFromObject( object );

    const center = boundingBox.getCenter();

    const size = boundingBox.getSize();

    // get the max side of the bounding box (fits to width OR height as needed )
    const maxDim = Math.max( size.x, size.y, size.z );
    const fov = camera.fov * ( Math.PI / 180 );
    let cameraZ = Math.abs( maxDim / 4 * Math.tan( fov * 2 ) );

    cameraZ *= offset; // zoom out a little so that objects don't fill the screen

    camera.position.z = cameraZ;

    const minZ = boundingBox.min.z;
    const cameraToFarEdge = ( minZ < 0 ) ? -minZ + cameraZ : cameraZ - minZ;

    camera.far = cameraToFarEdge * 3;
    camera.updateProjectionMatrix();

    if ( controls ) {

      // set camera to rotate around center of loaded object
      controls.target = center;

      // prevent camera from zooming out far enough to create far plane cutoff
      controls.maxDistance = cameraToFarEdge * 2;

      controls.saveState();

    } else {
        camera.lookAt( center );
   }
	}



  componentDidMount() {
    this.THREE = THREE;
    const loader = new this.THREE.OBJLoader();
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      50,
      width / height,
      0.1,
      2000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true })

    renderer.setClearColor('#000000')
    renderer.setSize(width, height)

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    var mixer;
    scene.add(camera);

    var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
    keyLight.position.set(-100, 0, 100);
     
    var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
    fillLight.position.set(100, 0, 100);
     
    var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
    backLight.position.set(100, 0, -100).normalize();
     
    scene.add(keyLight);
    scene.add(fillLight);
    scene.add(backLight);

    var gridHelper = new THREE.GridHelper( 10, 20 );
    scene.add(gridHelper);
    camera.lookAt(0, 0, 0)
		var ran = this.fitCameraToObject;

    this.mount.appendChild(this.renderer.domElement)
		loader.load(this.props.daeModel, function ( obj ) {
      obj.material = new THREE.MeshPhongMaterial({
        color: '#eaeaea',
        shininess: 80
      });
      obj.name = "dyno";
      console.log(obj);
			scene.add( obj );

			ran(camera, obj);
		});
		this.start()
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)

    const dyno = this.scene.getObjectByName("dyno");
    if (dyno) {
      dyno.rotation.z -= 0.01;
    }
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        style={{ width: '400px', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default Scene
