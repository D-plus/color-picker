import React, { Component } from 'react';
import classNames from 'classnames';
import InputRangeControl from '../InputRangeControl/InputRangeControl';
import Button from '../Button/Button';
import './RGBTuneBox.css';
import Color from '../../helpers/Color';
import { RGBTuneBoxTypes } from '../../type-check';

class RGBTuneBox extends Component {
  static get propTypes() {
    return { ...RGBTuneBoxTypes };
  }

  static get defaultProps() {
    return {
      defaultRGBState: { r: 0, g: 0, b: 0 }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      rgbObj: props.defaultRGBState,
      isColorSubmited: false
    };
    this.handleRangeInputChange = this.handleRangeInputChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  componentDidMount() {
    const { value, defaultRGBState } = this.props;
    const currentRGBColor = Color.hexToRgb(value);
    if (!currentRGBColor) {
      this.setState({ rgbObj: defaultRGBState });
    } else {
      this.setState({ rgbObj: currentRGBColor });
    }
  }

  componentWillUnmount() {
    const { value, chageTemporaryHexValue } = this.props;
    if (!this.state.isColorSubmited) {
      // if color wasn`t submitted reset it to previous
      this.props.onChange(null, value);
      chageTemporaryHexValue(null, '');
    }
  }

  handleRangeInputChange(colorShortcut) {
    return (e) => {
      const { rgbObj } = this.state;
      const { chageTemporaryHexValue } = this.props;
      const nextState = { ...rgbObj, [colorShortcut]: e.target.value };

      this.setState({ rgbObj: nextState });
      const nextHex = Color.rgbToHex(nextState);
      chageTemporaryHexValue(e, nextHex);
    };
  }

  handleSubmitClick(e) {
    const { onChange, onClose, chageTemporaryHexValue } = this.props;
    const nextHex = Color.rgbToHex(this.state.rgbObj);

    onChange(e, nextHex);
    chageTemporaryHexValue(null, '');
    this.setState({ isColorSubmited: true }, onClose);
  }

  render() {
    const { onClose, className, defaultRGBState } = this.props;
    const { rgbObj } = this.state;

    return (
      <div className={classNames('RGBTuneBox', className)}>
        <div className="RGBTuneBox-input-controls-wrapper">
          {Object.keys(defaultRGBState).map(colorShortcut => (
            <InputRangeControl
              id={colorShortcut}
              key={colorShortcut}
              label={colorShortcut}
              value={rgbObj[colorShortcut]}
              onChange={this.handleRangeInputChange(colorShortcut)}
              min={0}
              max={255}
              step={1}
            />
          ))}
        </div>
        <div className="RGBTuneBox-buttons-wrapper">
          <Button color="grey" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button color="green" type="button" onClick={this.handleSubmitClick}>
            Ok
          </Button>
        </div>
      </div>
    );
  }
}

export default RGBTuneBox;
