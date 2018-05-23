import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import icons from '../../helpers/icons';
import './SVGIcon.css';

export default function SVGIcon({
  color, icon, fill, className
}) {
  return (
    <svg
      style={{ fill: color }}
      viewBox={icons[icon][0]}
      className={classNames(className, 'SVGIcon')}
    >
      <path fill={fill} d={icons[icon][1]} />
    </svg>
  );
}

SVGIcon.defaultProps = {
  className: '',
  fill: ''
};

SVGIcon.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string,
  icon: PropTypes.string.isRequired
};
