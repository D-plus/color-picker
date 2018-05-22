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
    minLength,
    maxLength,
    ...other
  } = props;

  return (
    <div className="ColorPickerInputWrapper">
      <input
        className={classNames('Input', className)}
        type={type}
        name={name}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        value={value}
        {...other}
        autoComplete={autoComplete || 'off'}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
}

Input.defaultProps = {
  label: null,
  id: null,
  type: 'text',
  placeholder: null,
  disabled: false,
  value: '',
  required: false,
  className: '',
  autoComplete: 'off',
  minLength: '',
  maxLength: ''
};

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string
};
