import React, { Component } from 'react';
import './App.css';
import ColorPicker from './color-picker/ColorPicker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorPicker: {
        value: '#FFCC33',
        colors: [
          { label: 'red', value: '#ff0000' },
          { label: 'yellow', value: '#ffef00' },
          { label: 'green', value: '#03a903' },
          { label: 'blue', value: '#0079ff' }
        ]
      }
    };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(e, nextColor) {
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
