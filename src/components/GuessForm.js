import React, { Component } from "react";
import { connect } from "react-redux";
import { setNotification } from "../actions/actions-hot-cold";

class GuessForm extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  _handleInputChange = value => {
    this.setState({ value: value });
  };

  _validate = () => {
    let value = parseInt(this.state.value);
    if (value >= 50 || value < 0 || isNaN(value)) {
      this.props.dispatch(setNotification("error", "ENTER # BETWEEN 1 AND 50"));
    } else {
      this.props.dispatch(setNotification("none", ""));
      this._dispatchGuess();
    }
  };

  _dispatchGuess = () => {
    this.props.addGuess(parseInt(this.state.value));
    this.setState({ value: "" });
  };

  _handleSubmit = () => {
    this._validate();
  };

  _handleKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      this._handleSubmit();
    }
  };

  render() {
    return (
      <div className="guessForm">
        <form>
          <input
            type="text"
            autoFocus
            required
            placeholder="Enter your guess!"
            value={this.state.value}
            onChange={e => this._handleInputChange(e.target.value)}
            onKeyDown={e => this._handleKeyDown(e)}
          />
          <input onClick={this._handleSubmit} type="button" value="Guess" />
          <label>Guess# {this.props.guesses}</label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notification: state.notificationReducer.notification,
    correctNumber: state.gameReducer.correctNumber
  };
};

export default connect(mapStateToProps)(GuessForm);