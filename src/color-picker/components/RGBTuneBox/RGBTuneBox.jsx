import React, { Component } from 'react';
import { bindAll } from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './RGBTuneBox.css';

import Color from '../../helpers/Color';

class RGBTuneBox extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    value: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    defaultRGBState: {
      r: 0,
      g: 0,
      b: 0
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      rgbObj: props.defaultRGBState,
      isColorSubmited: false
    };
    bindAll(this, 'handleRangeInputChange', 'handleSubmitClick');
  }

  componentDidMount() {
    const { value, defaultRGBState } = this.props;
    // console.log('value', value);
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

  handleRangeInputChange(e, colorShortcut) {
    const { rgbObj } = this.state;
    const { chageTemporaryHexValue } = this.props;
    const nextState = { ...rgbObj, [colorShortcut]: e.target.value };

    this.setState({ rgbObj: nextState });
    const nextHex = Color.rgbToHex(nextState);
    chageTemporaryHexValue(e, nextHex);
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
        {Object.keys(defaultRGBState).map((colorShortcut, key) => (
          <input
            key={key}
            value={rgbObj[colorShortcut]}
            onChange={e => this.handleRangeInputChange(e, colorShortcut)}
            type="range"
            min={0}
            max={255}
            step={1}
          />
        ))}
        <button type="button" onClick={this.handleSubmitClick}>
          Ok
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    );
  }
}

export default RGBTuneBox;
