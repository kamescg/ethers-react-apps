/**
 *
 * @param {Object} provider
 */
export const providerSetStatus = (state, dispatch) => ({ provider }) =>
  dispatch({
    type: 'SET_PROVIDER_STATUS',
    payload: provider
  });
