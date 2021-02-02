const initialState = { focus: 60, shortBreak: 5, longBreak: 15 };

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SETTINGS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default settingsReducer;
