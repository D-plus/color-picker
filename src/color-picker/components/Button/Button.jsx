import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';

export default function Button(props) {
  const {
    className, id, type, name, disabled, children, color, onClick, ...other
  } = props;

  return (
    <button
      className={classNames(`Button Button-${color}`)}
      disabled={disabled}
      onClick={onClick}
      {...other}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  id: null,
  type: 'text',
  name: '',
  disabled: false,
  className: ''
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
