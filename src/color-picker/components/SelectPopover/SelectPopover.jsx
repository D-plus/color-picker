import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './SelectPopover.css';

import SelectBox from '../SelectBox/SelectBox';
import Popover from '../Popover/Popover';
import expandable from '../hocs/expanable';

class SelectPopover extends Component {
  static propTypes = {
    popoverClassName: PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {};
    this.selectBox = React.createRef();
  }

  render() {
    const {
      selectBoxIconName,
      selectBoxIconColor,
      toggleComponent,
      open,
      popoverContentRenderer,
      popoverClassName,
      popoverMargin,
      onChange,
      onSubmit,
      options,
      value
    } = this.props;

    return (
      <div className="SelectPopover">
        <SelectBox
          bindRef={this.selectBox}
          iconName={selectBoxIconName}
          iconColor={selectBoxIconColor}
          onClick={toggleComponent}
        />
        {open && (
          <Popover boundWithElement={this.selectBox} margin={popoverMargin}>
            {popoverContentRenderer(
              onChange,
              onSubmit,
              this.props.toggleComponent,
              options,
              value,
              this.selectBox
            )}
          </Popover>
        )}
      </div>
    );
  }
}

export default expandable(SelectPopover, 'Popover');
