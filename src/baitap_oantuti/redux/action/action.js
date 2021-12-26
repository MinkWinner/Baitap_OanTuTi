import * as ActionType from "../constant/constant";

export const playGame = () => {
  return {
    type: ActionType.PLAYGAME,
  };
};

export const showResult = () => {
  return {
    type: ActionType.RESULT,
  };
};

export const select = (option) => {
  return {
    type: ActionType.SELECT,
    payload: option,
  };
};
