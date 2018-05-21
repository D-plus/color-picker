import React, { Component } from 'react';
import classNames from 'classnames';
import './Popover.css';
import { popoverTypes } from '../../type-check';

class Popover extends Component {
  static get propTypes() {
    return {
      ...popoverTypes
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      leftCoordinateOfArrow: 0
    };
    this.arrowRef = React.createRef();
  }

  componentDidMount() {
    const { boundWithElement: { current: targetElement } } = this.props;
    const centerOfTargetElement = targetElement.offsetWidth / 2;
    const leftCoordinateOfArrow = centerOfTargetElement - this.arrowRef.current.offsetWidth / 2;
    this.setState({
      leftCoordinateOfArrow
    });
    console.log('leftCoordinateOfArrow', leftCoordinateOfArrow);
  }

  render() {
    const {
      children,
      boundWithElement: { current: targetElement },
      margin,
      className
    } = this.props;
    const { leftCoordinateOfArrow } = this.state;

    // console.log('Popover bindWithElement', targetElement);
    // style={{ left: leftCoordinateOfArrow }}
    return (
      <div className={classNames('Popover', className)} style={{ margin }}>
        <span ref={this.arrowRef} className="Popover-Arrow">
          Arrow
        </span>
        {children}
      </div>
    );
  }
}

export default Popover;
