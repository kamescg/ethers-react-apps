import { SET_PROVIDER } from '../types';
export const providerSet = (state, dispatch) => ({ provider }) =>
  dispatch({
    type: SET_PROVIDER,
    payload: provider
  });
