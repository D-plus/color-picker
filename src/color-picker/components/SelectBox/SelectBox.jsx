import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './SelectBox.css';

import SVGIcon from '../SVGIcon/SVGIcon';

class SelectBox extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { iconName, iconColor, onClick, bindRef } = this.props;
    const {} = this.state;

    return (
      <div ref={bindRef} className="SelectBox" onClick={onClick}>
        <SVGIcon icon={iconName} color={iconColor} />
      </div>
    );
  }
}

export default SelectBox;
