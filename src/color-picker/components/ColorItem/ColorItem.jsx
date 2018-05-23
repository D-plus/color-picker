import React from 'react';
import classNames from 'classnames';
import './ColorItem.css';

import SVGIcon from '../SVGIcon/SVGIcon';
import { colorItemTypes } from '../../type-check';

export default function ColorItem({
  handleColorItemClick, item, onKeyUp, className, active
}) {
  return (
    <div
      className={classNames({ ColorItem: true, ...className, active })}
      onClick={handleColorItemClick}
      role="menuitem"
      tabIndex={0}
      onKeyUp={onKeyUp}
    >
      <span>{item.label}</span>
      <SVGIcon icon="square" color={item.value} />
    </div>
  );
}

ColorItem.propTypes = {
  ...colorItemTypes
};
