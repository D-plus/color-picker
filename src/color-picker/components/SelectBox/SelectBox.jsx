import React from 'react';
import classNames from 'classnames';
import './SelectBox.css';

import SVGIcon from '../SVGIcon/SVGIcon';
import { selectBoxTypes } from '../../common/type-check';

export default function SelectBox({
  iconName, iconColor, onClick, bindRef, onKeyUp, className
}) {
  return (
    <div
      className={classNames('SelectBox', className)}
      ref={bindRef}
      onClick={onClick}
      onKeyUp={onKeyUp}
      tabIndex="0"
      role="button"
    >
      <SVGIcon icon={iconName} color={iconColor} />
    </div>
  );
}

SelectBox.propTypes = {
  ...selectBoxTypes
};
