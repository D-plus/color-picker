import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './InputRangeControl.css';

export default function InputRangeControl(props) {
  const {
    className, label, id, type, name, value, disabled, onChange, min, max, ...other
  } = props;

  return (
    <div className="InputRangeControl">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        className={classNames(className)}
        value={value}
        onChange={onChange}
        type="range"
        min={0}
        max={255}
        step={1}
        {...other}
      />
    </div>
  );
}

InputRangeControl.defaultProps = {
  label: null,
  id: null,
  type: 'text',
  name: '',
  disabled: false,
  className: '',
  min: 0,
  max: 0,
  step: 1
};

InputRangeControl.propTypes = {
  type: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number
};
