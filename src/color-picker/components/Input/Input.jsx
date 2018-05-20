import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Input.css';

export default function Input(props) {
  const {
    required,
    className,
    label,
    id,
    type,
    name,
    value,
    disabled,
    placeholder,
    onChange,
    autoComplete,
    maxLength,
    ...other
  } = props;
  const extraProps = { value: '' };
  if (value) {
    extraProps.value = value;
  }
  return (
    <div>
      <input
        className={classNames('Input', className)}
        type={type}
        name={name}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        {...other}
        {...extraProps}
        autoComplete={autoComplete || 'off'}
        maxLength={maxLength || ''}
      />
    </div>
  );
}

Input.defaultProps = {
  label: null,
  id: null,
  type: 'text',
  placeholder: null,
  onChange: () => {},
  disabled: false,
  value: '',
  required: false
};

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool
};
