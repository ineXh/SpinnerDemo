import React from 'react';
import {render, View, TextInput} from 'react-dom';

import css from './../css/styles.css';

class Spinner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	rotation: 0,

    };

    this.rotate = this.rotate.bind(this);
  }
  componentDidMount(){
    console.log('mount')
    window.addEventListener("deviceorientation", this.handleRotation.bind(this), true);
  }
  componentWillUnmount(){
    window.removeEventListener("deviceorientation", this.handleRotation.bind(this), true);
  }
  handleRotation(data){
    let newRotation = data.gamma%360;
    this.setState({rotation: newRotation});
  }
  rotate(){
    //console.log('rotate')
    //onClick={this.rotate}
    let newRotation = this.state.rotation + 10;
    this.setState({rotation: newRotation});
  }
  render() {
    let rotation = 0
    return (
      <img style={{transform: `rotate(${this.state.rotation}deg)`}}
           src={"src/client/assets/0.png"}
           width="256" height="256" />
    );
  } // end render

} // end Spinner

export default Spinner;

/*
<div>
        <h1>Spinner</h1>
        <button id="spinner"></button>
      </div>
      */