import React, { Component } from 'react';
import { bindAll } from 'lodash';
import classNames from 'classnames';
import './ColorPicker.css';

import { validateHexString } from './helpers/functions';
import Input from './components/Input/Input';
import SelectPopover from './components/SelectPopover/SelectPopover';
import RGBTuneBox from './components/RGBTuneBox/RGBTuneBox';
import ColorsList from './components/ColorsList/ColorsList';
import { colorPickerTypes } from './type-check';

class ColorPicker extends Component {
  static propTypes = {
    ...colorPickerTypes
  };
  constructor(props) {
    super(props);
    this.state = {
      isHexValid: true,
      temporaryHexValue: ''
    };
    bindAll(
      this,
      'handleInputChange',
      'changeState',
      'updateValidityOfHexString'
    );
  }

  changeState(field) {
    return (e, value) => {
      this.setState({
        [field]: value
      });
    };
  }

  updateValidityOfHexString(str) {
    console.log('str', str);
    const isNextHextValid = validateHexString(str);
    if (this.state.isHexValid !== isNextHextValid) {
      this.setState({
        isHexValid: isNextHextValid
      });
    }
    return null;
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.updateValidityOfHexString(value);

    this.props.onChange(e, e.target.value);
  }

  render() {
    const { color, colors, onChange } = this.props;
    const { isHexValid, temporaryHexValue } = this.state;

    return (
      <div className="ColorPicker">
        <Input
          className={classNames({ 'Input-Invalid-Value': !isHexValid })}
          name="color-picker"
          onChange={this.handleInputChange}
          value={temporaryHexValue || color}
        />
        <SelectPopover
          selectBoxIconName={'arrowDown'}
          selectBoxIconColor={temporaryHexValue || color}
          popoverClassName={'RGBTuneBoxPopover'}
          popoverMargin={20}
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
          selectBoxIconName={'arrowDown'}
          selectBoxIconColor="#b1aeae"
          popoverContentRenderer={{ contentContainer: ColorsList }}
          popoverClassName={'ColorsListPopover'}
          popoverMargin={20}
          value={color}
          options={colors}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default ColorPicker;
