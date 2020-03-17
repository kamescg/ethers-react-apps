import {
  ENABLE_REQUEST,
  ENABLE_SUCCESS,
  ENABLE_FAILURE,
  SET_PROVIDER,
  SET_PROVIDER_MULTIPLE,
  SET_PROVIDER_STATUS,
  INIT_CONTRACT_REQUEST,
  CONTRACT_INITIALIZE_SUCCESS,
  BALANCE_SET,
  NONCE_SET,
  NETWORK_SET,
  SET_ADDRESS
} from "./types";

import {
  CONTRACT_DEPLOY_SUBMITTED,
  CONTRACT_DEPLOY_COMPLETE,
  CONTRACT_DEPLOY_REJECTED,
  TRANSACTION_SUBMITTED,
  TRANSACTION_COMPLETE,
  TRANSACTION_REJECTED
} from "./status";

const reducerActions = (state, action) => {
  const { id, payload, type } = action;
  switch (type) {
    /* ----------------------- */
    /*         Common          */
    /* ----------------------- */
    case ENABLE_REQUEST:
      return {
        ...state,
        isEnableRequested: true
      };
    case ENABLE_SUCCESS:
      return {
        ...state,
        isEnableSuccess: true,
        isEnableRequested: false
      };
    case ENABLE_FAILURE:
      return {
        ...state,
        isEnableRequested: false,
        isEnableSuccess: false
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: payload
      };

    case NETWORK_SET:
      return {
        ...state,
        network: payload
      };

    /* ----------------------- */
    /* Contract Initialize     */
    /* ----------------------- */

    case CONTRACT_INITIALIZE_SUCCESS:
      return {
        ...state,
        contracts: {
          ...state.contracts,
          [action.id]: {
            api: payload,
            ...state.contracts[payload.address]
          },
          ...state.contacts
        }
      };

    case INIT_CONTRACT_REQUEST:
      const { address, contract } = payload;
      return {
        ...state,
        store: {
          ...state.store,
          contracts: []
        },
        contracts: {
          ...state.contracts,
          [id]: {
            id,
            address,
            ...contract
          }
        }
      };

    default:
      return state;
  }
};

export default reducerActions;
