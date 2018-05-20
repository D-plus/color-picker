import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ColorsList.css';

import ColorItem from '../ColorItem/ColorItem';

class ColorsList extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { options, onChange } = this.props;

    return (
      <div className="ColorsList">
        {options.map((item, key) => (
          <ColorItem key={key} color={item} onChange={onChange} />
        ))}
      </div>
    );
  }
}

export default ColorsList;
