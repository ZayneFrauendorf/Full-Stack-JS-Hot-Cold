import React, { Component } from "react";
import { connect } from "react-redux";

class Notification extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.nType === "restart" ? (
      <div
        onClick={this.props.reset}
        className={`notification-${this.props.nType}`}
      >
        <label>
          <h3>{this.props.notification}</h3>
        </label>
      </div>
    ) : (
      <div className={`notification-${this.props.nType}`}>
        <label>
          <h3>{this.props.notification}</h3>
        </label>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notification: state.notificationReducer.notification,
    nType: state.notificationReducer.nType
  };
};

export default connect(mapStateToProps)(Notification);
