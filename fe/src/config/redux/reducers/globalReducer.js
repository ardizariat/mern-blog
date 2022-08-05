const initialStateGlobal = {
  username: "ardi",
};

const globalReducer = (state = initialStateGlobal, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
