import Action from "./actionTypes";
import actionTypes from "./actionTypes";

export const addGuess = guess => ({
  type: Action.ADD_GUESS,
  guess
  // guess: guess - abbreviated above
});

export const setLoaded = random => ({
  type: Action.SET_LOADED,
  random
  // random: random - abbreviated above
});

export const setHot = (message, style) => ({
  type: Action.SET_HOT,
  message,
  style
});

export const setCold = (message, style) => ({
  type: Action.SET_COLD,
  message,
  style
});

export const setVictory = (message, style) => ({
  type: Action.SET_VICTORY,
  message,
  style
});

export const setNotification = (nType, notification) => ({
  type: Action.SET_NOTIFICATION,
  nType,
  notification
});
