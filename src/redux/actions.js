import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_TYPE,
  CHANGE_AMOUNT,
  CHANGE_SCORE,
} from "./actionTypes";

export const changeCategory = (payload) => ({
    type: CHANGE_CATEGORY,
    payload,
});

export const changeDifficulty = (payload) => ({
    type: CHANGE_DIFFICULTY,
    payload,
});

export const changeType = (payload) => ({
    type: CHANGE_TYPE,
    payload,
});

export const changeAmount = (payload) => ({
    type: CHANGE_AMOUNT,
    payload,
});

export const changeScore = (payload) => ({
    type: CHANGE_SCORE,
    payload,
});
