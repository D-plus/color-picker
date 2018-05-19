import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ColorPicker.css';
import { listOfColors } from './type-check';
import Input from './components/Input';

class ColorPicker extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    colors: listOfColors,
    onChange: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      isHexValid: true
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateHexString = this.validateHexString.bind(this);
    this.changeState = this.changeState.bind(this);
    this.updateValidityOfHexString = this.updateValidityOfHexString.bind(this);
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps');
  //   this.updateValidityOfHexString(nextProps.color);
  //   return null;
  // }

  changeState(field) {
    return value => {
      this.setState({
        [field]: value
      });
    };
  }

  updateValidityOfHexString(str) {
    console.log('str', str);
    const isNextHextValid = this.validateHexString(str);
    if (this.state.isHexValid !== isNextHextValid) {
      this.setState({
        isHexValid: isNextHextValid
      });
    }
    return null;
  }

  validateHexString(hex) {
    return /^#[0-9a-f]{3,6}$/i.test(hex);
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.updateValidityOfHexString(value);

    this.props.onChange(e.target.value);
  }

  render() {
    const { color, colors } = this.props;
    const { isHexValid } = this.state;

    return (
      <div className="ColorPicker">
        <Input
          className={classNames(
            isHexValid ? 'Input-Valid-Value' : 'Input-Invalid-Value'
          )}
          name="color-picker"
          onChange={this.handleInputChange}
          value={color}
        />
        <div style={{ width: 20, height: 20, backgroundColor: color }} />
      </div>
    );
  }
}

export default ColorPicker;
