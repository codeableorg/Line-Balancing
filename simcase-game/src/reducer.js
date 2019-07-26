const initialState = {
  totalScore: 0
};

function Score(state = initialState.totalScore, action = {}) {
  switch (action.type) {
    case "ADD_SCORE":
      return action.payload;
    default:
      return state;
  }
}

export default Score;
