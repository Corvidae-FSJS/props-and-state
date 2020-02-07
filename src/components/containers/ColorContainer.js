import React, { Component } from 'react';
import ColorDisplay from '../colors/ColorDisplay';
import ColorPicker from '../colors/ColorPicker';

export default class ColorContainer extends Component {
  state = {
    backgroundColor: 'black' //RandomColor
  };
  
  selectColor = backgroundColor => {
    this.setState({ backgroundColor });
  }

  render() {
    const { backgroundColor } = this.state;
    const colors = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black'];

    return (
      <>
        <ColorDisplay backgroundColor={backgroundColor} />
        <ColorPicker
          selectColor={this.selectColor}
          colors={colors} />
      </>
    );
  }
}