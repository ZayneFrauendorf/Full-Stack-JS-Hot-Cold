import Action from "../actions/actionTypes";

const initialState = {
  guesses: [],
  correctNumber: null,
  loading: true,
  message: "Feelin' lucky?",
  style: "neutral",
  victory: false
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.ADD_GUESS:
      return {
        ...state,
        guesses: [...state.guesses, action.guess]
      };
    case Action.SET_LOADED:
      return {
        ...state,
        loading: false,
        correctNumber: action.random
      };
    case Action.SET_HOT:
      return {
        ...state,
        message: action.message,
        style: action.style
      };
    case Action.SET_COLD:
      return {
        ...state,
        message: action.message,
        style: action.style
      };
    case Action.SET_VICTORY:
      return {
        ...state,
        message: action.message,
        style: action.style,
        victory: true

      };
  }

  return state;
};
