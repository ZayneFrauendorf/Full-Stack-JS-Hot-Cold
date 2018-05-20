import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addGuess,
  setLoaded,
  setHot,
  setCold,
  setVictory,
  setNotification
} from "../actions/actions-hot-cold";
import GameTitle from "./GameTitle";
import GuessForm from "./GuessForm";
import TopMessage from "./TopMessage";
import GuessHistory from "./GuessHistory";
import Notification from "./Notification";

class App extends Component {
  _addGuess = guess => {
    this.props.dispatch(addGuess(guess));
    this._compareGuess(guess);
  };

  _reset = () => {
    window.location.reload();
  };

  _compareGuess = guess => {
    let distance = guess - this.props.correctNumber;

    if (distance === 0) {
      this.props.dispatch(setVictory("Victory!", "victory"));
      this.props.dispatch(
        setNotification("restart", "Well done, click here to restart!")
      );
    } else if (distance <= 10 && distance >= -10) {
      this.props.dispatch(setHot("Hot!", "hot"));
    } else {
      this.props.dispatch(setCold("Ice Cold!", "cold"));
    }
  };

  componentDidMount = () => {
    const randomNumber = Math.floor(Math.random() * 50);
    this.props.dispatch(setLoaded(randomNumber));
  };

  render() {
    return (
      <React.Fragment>
        <GameTitle />
        <Notification
          reset={this._reset}
          notification={this.props.notification}
        />
        <div className={`App-${this.props.style}`}>
          <TopMessage message={this.props.message} />
          <GuessForm
            addGuess={this._addGuess}
            guesses={this.props.guesses.length}
          />
          <GuessHistory guessHistory={this.props.guesses} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    guesses: state.gameReducer.guesses,
    correctNumber: state.gameReducer.correctNumber,
    message: state.gameReducer.message,
    style: state.gameReducer.style,
    notification: state.notificationReducer.notification
  };
};

export default connect(mapStateToProps)(App);
