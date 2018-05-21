import React from 'react';
import classNames from 'classnames';
import './ColorItem.css';

import SVGIcon from '../SVGIcon/SVGIcon';
import { colorItemTypes } from '../../type-check';

function ColorItem({
  handleColorItemClick, item, onKeyUp, className
}) {
  return (
    <div
      className={classNames('ColorItem', className)}
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

export default ColorItem;
