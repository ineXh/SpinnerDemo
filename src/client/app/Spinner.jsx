import React from 'react';
import {render, View, TextInput} from 'react-dom';

import css from './../css/styles.css';

class Spinner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	rotation: 0,
      alpha: 0,
      beta: 0,
      gamma: 0,

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
    this.setState({rotation: newRotation, alpha: data.alpha, beta: data.beta, gamma: data.gamma, });
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
      <div>
        <p>alpha: {this.state.alpha}</p>
        <p>beta: {this.state.beta}</p>
        <p>gamma: {this.state.gamma}</p>
        <img style={{transform: `rotate(${this.state.rotation}deg)`,
                margin: 'auto',
                position: 'absolute',
                bottom: '50%',
                left: '50%',
                marginTop: '-128px',
                marginLeft: '-128px',
              }}
             src={"assets/0.png"}
             width="256" height="256" />
      </div>
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