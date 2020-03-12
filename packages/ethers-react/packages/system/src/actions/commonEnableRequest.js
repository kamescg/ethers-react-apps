import { ENABLE_REQUEST } from "../types";

export const enableRequest = (state, dispatch) => () => {
  dispatch({
    type: ENABLE_REQUEST
  });
};
