import Action from "../actions/actionTypes";

const initialState = {
  nType: "rules",
  notification: "Enter a number between 1 & 50!"
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.SET_NOTIFICATION:
      return {
        ...state,
        nType: action.nType,
        notification: action.notification
      };
    default:
      return state;
  }
};
