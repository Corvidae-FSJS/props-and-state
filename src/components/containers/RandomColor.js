import React, { Component } from 'react';
import ColorDisplay from '../colors/ColorDisplay';

export default class RandomColor extends Component {
  state = {
    color: 'black'
  };
  
  randomize = () => {
    const color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const random = Math.floor(Math.random() * color.length);    
    this.setState({ color: color[random] });
  }

  componentDidMount() {
    this.randomize;
    setInterval(this.randomize, 1000);
  }

  render()  {
    const { color } = this.state;

    return (
      <div style={{ 
        background: color, 
        width: '100px', 
        height: '100px' }} />
    );
  }
}