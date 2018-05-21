import React, { Component } from 'react';
import classNames from 'classnames';
import './ColorPicker.css';

import { validateHexString } from './helpers/functions';
import Input from './components/Input/Input';
import SelectPopover from './components/SelectPopover/SelectPopover';
import RGBTuneBox from './components/RGBTuneBox/RGBTuneBox';
import ColorsList from './components/ColorsList/ColorsList';
import { colorPickerTypes } from './type-check';

class ColorPicker extends Component {
  static get propTypes() {
    return { ...colorPickerTypes };
  }
  constructor(props) {
    super(props);
    this.state = {
      isHexValid: true,
      temporaryHexValue: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.changeState = this.changeState.bind(this);
    this.updateValidityOfHexString = this.updateValidityOfHexString.bind(this);
  }

  changeState(field) {
    return (e, value) => {
      this.setState({
        [field]: value
      });
    };
  }

  updateValidityOfHexString(str) {
    const isNextHextValid = validateHexString(str);
    if (this.state.isHexValid !== isNextHextValid) {
      this.setState({
        isHexValid: isNextHextValid
      });
    }
    return null;
  }

  handleInputChange(e) {
    const { target: { value } } = e;
    this.updateValidityOfHexString(value);
    this.props.onChange(e, value);
  }

  render() {
    const { color, colors, onChange } = this.props;
    const { isHexValid, temporaryHexValue } = this.state;
    return (
      <div className="ColorPicker">
        <div className="ColorPicker-input-wrapper">
          <Input
            className={classNames({ 'Input-Invalid-Value': !isHexValid })}
            name="color-picker"
            onChange={this.handleInputChange}
            value={temporaryHexValue || color}
            placeholder="#FFCC33"
          />
        </div>
        <SelectPopover
          selectBoxIconName="square"
          selectBoxIconColor={temporaryHexValue || color}
          popoverClassName="RGBTuneBoxPopover"
          popoverMargin={0}
          popoverContentRenderer={{
            contentContainer: RGBTuneBox,
            extraProps: {
              temporaryHexValue,
              chageTemporaryHexValue: this.changeState('temporaryHexValue')
            }
          }}
          value={color}
          onChange={onChange}
        />
        <SelectPopover
          selectBoxIconName="arrowDown"
          selectBoxIconColor="#b1aeae"
          popoverContentRenderer={{ contentContainer: ColorsList }}
          popoverClassName="ColorsListPopover"
          popoverMargin={0}
          value={color}
          options={colors}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default ColorPicker;
