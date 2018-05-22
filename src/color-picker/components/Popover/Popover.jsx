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
      rightCoordinateOfArrowElement: 0
    };
    this.arrowRef = React.createRef();
  }

  componentDidMount() {
    const {
      relativeElementRef: { current: relativeElement },
      boundWithElement: { current: targetElement }
    } = this.props;
    this.setArrowElementRelativeToTargetElement(relativeElement, targetElement, this.arrowRef);
  }

  setArrowElementRelativeToTargetElement(relativeElement, targetElement, arrowElement) {
    const rightCoordinateOfRelativeElement = relativeElement.getBoundingClientRect().right;
    const leftCoordinateOfTargetElement = targetElement.getBoundingClientRect().left;
    const halfOffSetWidthOfTargetElement = targetElement.offsetWidth / 2;
    const halfOffSetWidthOfArrowElement = arrowElement.current.offsetWidth / 2;
    const sumOfRightLeftBorderWidthOfRelativeElem =
      parseInt(window.getComputedStyle(relativeElement)['border-right-width'], 10) +
      parseInt(window.getComputedStyle(relativeElement)['border-left-width'], 10);

    const rightCoordinateOfArrowElement =
      rightCoordinateOfRelativeElement -
      leftCoordinateOfTargetElement -
      halfOffSetWidthOfTargetElement -
      halfOffSetWidthOfArrowElement -
      sumOfRightLeftBorderWidthOfRelativeElem;
    this.setState({
      rightCoordinateOfArrowElement
    });
  }

  render() {
    const { children, marginTop, className } = this.props;
    const { rightCoordinateOfArrowElement } = this.state;
    return (
      <div className={classNames('Popover', className)} style={{ marginTop }}>
        <span
          ref={this.arrowRef}
          className="Popover-Arrow"
          style={{ right: rightCoordinateOfArrowElement }}
        />
        {children}
      </div>
    );
  }
}

export default Popover;
