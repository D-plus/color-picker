import React from 'react';

export default function expandable(Target, stopClass) {
  return class ExpandableWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false
      };
      this.bodyNotificationClick = this.bodyNotificationClick.bind(this);
      this.bodyNotificationReset = this.bodyNotificationReset.bind(this);
      this.toggleComponent = this.toggleComponent.bind(this);
    }

    componentDidMount() {
      document.body.addEventListener('click', this.bodyNotificationClick);
      document.body.addEventListener('reset', this.bodyNotificationReset);
    }

    componentWillUnmount() {
      document.body.removeEventListener('click', this.bodyNotificationClick);
      document.body.removeEventListener('reset', this.bodyNotificationReset);
    }

    toggleComponent() {
      this.setState({ open: !this.state.open });
    }

    bodyNotificationClick(e) {
      let t = e.target;
      let bodyClick = true;
      if (!this.state.open) return;
      while (t.classList && bodyClick) {
        bodyClick = !t.classList.contains(stopClass);
        t = t.parentNode;
      }
      if (bodyClick) this.setState({ open: false });
    }

    bodyNotificationReset() {
      this.setState({ open: false });
    }

    render() {
      return (
        <Target open={this.state.open} toggleComponent={this.toggleComponent} {...this.props} />
      );
    }
  };
}
