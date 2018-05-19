import React, { Component } from 'react';
import './App.css';
import ColorPicker from './color-picker/ColorPicker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorPicker: {
        value: '',
        colors: []
      }
    };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(nextColor) {
    console.log(nextColor);
    this.setState({
      colorPicker: {
        ...this.state.colorPicker,
        value: nextColor
      }
    });
  }

  render() {
    const { colorPicker: { value, colors } } = this.state;
    return (
      <div className="App">
        <ColorPicker
          color={value}
          colors={colors}
          onChange={this.handleColorChange}
        />
      </div>
    );
  }
}

export default App;
