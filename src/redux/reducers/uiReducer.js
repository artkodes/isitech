const initalState = {
  isLoading: true
};

export default function(state = initalState, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
