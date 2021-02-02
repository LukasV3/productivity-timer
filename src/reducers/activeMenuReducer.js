const intialState = "focus";

const activeMenuReducer = (state = intialState, action) => {
  switch (action.type) {
    case "UPDATE_ACTIVE_MENU":
      return action.payload;
    default:
      return state;
  }
};

export default activeMenuReducer;
