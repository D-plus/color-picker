import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ColorItem.css';

import SVGIcon from '../SVGIcon/SVGIcon';

function ColorItem({ onChange, color }) {
  return (
    <div className="ColorItem" onClick={e => onChange(e, color)}>
      <SVGIcon icon="arrowDown" color={color.value} />
      <span>{color.label}</span>
    </div>
  );
}

export default ColorItem;
