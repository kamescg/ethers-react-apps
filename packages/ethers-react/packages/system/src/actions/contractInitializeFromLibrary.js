export const contractInitializeFromLibrary = (state, dispatch) => ({
  address,
  contractName
}) =>
  dispatch({
    type: 'INIT_CONTRACT_FROM_LIBRARY_REQUEST',
    payload: {
      address,
      contractName
    }
  });
