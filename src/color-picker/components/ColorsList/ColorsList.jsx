import React, { Component } from 'react';
import classNames from 'classnames';
import './ColorsList.css';

import ColorItem from '../ColorItem/ColorItem';
import { colorsListTypes } from '../../common/type-check';

export default class ColorsList extends Component {
  static get propTypes() {
    return { ...colorsListTypes };
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.handleColorItemClick = this.handleColorItemClick.bind(this);
    this.handleEnterKeyUp = this.handleEnterKeyUp.bind(this);
    this.setNextColorValue = this.setNextColorValue.bind(this);
  }

  setNextColorValue(e, value) {
    const { onChange, onClose } = this.props;
    onChange(e, value);
    onClose(e);
  }

  handleEnterKeyUp(item) {
    return (e) => {
      if (e.key === 'Enter') this.setNextColorValue(e, item.value);
    };
  }

  handleColorItemClick(value) {
    return (e) => {
      this.setNextColorValue(e, value);
    };
  }

  render() {
    const { options: colors, value: currentSelectedColor, className } = this.props;
    return (
      <div className={classNames('ColorsList', className)}>
        {colors.map(item => (
          <ColorItem
            key={item.value}
            active={currentSelectedColor.toLowerCase() === item.value.toLowerCase()}
            item={item}
            handleColorItemClick={this.handleColorItemClick(item.value)}
            onKeyUp={this.handleEnterKeyUp(item)}
          />
        ))}
      </div>
    );
  }
}
