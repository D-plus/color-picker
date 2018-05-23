import React, { Component } from 'react';
import classNames from 'classnames';
import './SelectPopover.css';

import SelectBox from '../SelectBox/SelectBox';
import Popover from '../Popover/Popover';
import expandable from '../hocs/expanable';
import { selectPopoverTypes } from '../../common/type-check';

class SelectPopover extends Component {
  static get propTypes() {
    return { ...selectPopoverTypes };
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.selectBox = React.createRef();
    this.handleEnterKeyUp = this.handleEnterKeyUp.bind(this);
  }

  handleEnterKeyUp(e) {
    if (e.key === 'Enter') this.props.toggleComponent(e);
  }

  render() {
    const {
      selectBoxIconName,
      selectBoxIconColor,
      toggleComponent,
      open,
      popoverContentRenderer: { contentContainer: ContentContainer, extraProps = {} },
      popoverClassName,
      popoverMarginTop,
      onChange,
      options,
      value,
      chageTemporaryHexValue,
      selectBoxClassName,
      className
    } = this.props;
    return (
      <div className={classNames('SelectPopover', className)}>
        <SelectBox
          className={selectBoxClassName}
          bindRef={this.selectBox}
          iconName={selectBoxIconName}
          iconColor={selectBoxIconColor}
          onClick={toggleComponent}
          onKeyUp={this.handleEnterKeyUp}
        />
        {open && (
          <Popover
            className={popoverClassName}
            relativeElementRef={extraProps.relativeElementRef}
            boundWithElement={this.selectBox}
            marginTop={popoverMarginTop}
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
