import React, { Component } from 'react';
import { bindAll } from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ColorPicker.css';

import { validateHexString } from './helpers/functions';
import { listOfColors } from './type-check';
import Input from './components/Input/Input';
import SelectPopover from './components/SelectPopover/SelectPopover';
import RGBTuneBox from './components/RGBTuneBox/RGBTuneBox';
import ColorsList from './components/ColorsList/ColorsList';

const setContent = (ContentComponent, extraProps = {}) => (
  onChange,
  onSubmit,
  onClose,
  options,
  value,
  boundWithElement
) => {
  return (
    <ContentComponent
      onChange={onChange}
      onSubmit={onSubmit}
      onClose={onClose}
      options={options}
      value={value}
      boundWithElement={boundWithElement}
      {...extraProps}
    />
  );
};

class ColorPicker extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    colors: listOfColors,
    onChange: PropTypes.func.isRequired
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
          popoverContentRenderer={setContent(RGBTuneBox, {
            temporaryHexValue,
            chageTemporaryHexValue: this.changeState('temporaryHexValue')
          })}
          popoverClassName={'RGBTuneBoxPopover'}
          popoverMargin={20}
          withoutOptions
          value={color}
          onChange={onChange}
          onSubmit={() => console.log('onSubmit')}
          onClose={() => console.log('onClose')}
        />
        <SelectPopover
          selectBoxIconName={'arrowDown'}
          selectBoxIconColor="#b1aeae"
          popoverContentRenderer={setContent(ColorsList)}
          popoverClassName={'RGBTuneBoxPopover'}
          popoverMargin={20}
          value={''}
          options={colors}
          onChange={() => console.log('onChange')}
        />
      </div>
    );
  }
}

export default ColorPicker;
