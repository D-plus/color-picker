import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './SelectPopover.css';

import SelectBox from '../SelectBox/SelectBox';
import Popover from '../Popover/Popover';
import expandable from '../hocs/expanable';
import { selectPopoverTypes } from '../../type-check';

class SelectPopover extends Component {
  static propTypes = { ...selectPopoverTypes };

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
      popoverContentRenderer: {
        contentContainer: ContentContainer,
        extraProps = {}
      },
      popoverClassName,
      popoverMargin,
      onChange,
      options,
      value,
      chageTemporaryHexValue
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
          <Popover
            className={classNames('Popover', popoverClassName)}
            boundWithElement={this.selectBox}
            margin={popoverMargin}
          >
            <ContentContainer
              onChange={onChange}
              onClose={this.props.toggleComponent}
              options={options}
              value={value}
              boundWithElement={this.selectBox}
              chageTemporaryHexValue={chageTemporaryHexValue}
              {...extraProps}
            />
          </Popover>
        )}
      </div>
    );
  }
}

export default expandable(SelectPopover, 'Popover');
