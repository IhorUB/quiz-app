import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_TYPE,
  CHANGE_AMOUNT,
  CHANGE_SCORE,
} from "./actionTypes";

const initialState = {
  category: "",
  difficulty: "",
  type: "",
  amount: 10,
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case CHANGE_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      };
    case CHANGE_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case CHANGE_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
