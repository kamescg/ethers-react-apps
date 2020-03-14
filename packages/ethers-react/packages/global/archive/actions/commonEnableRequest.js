import { ENABLE_REQUEST } from "../types";

export const enableRequest = dispatch => () =>
  dispatch({
    type: ENABLE_REQUEST
  });
