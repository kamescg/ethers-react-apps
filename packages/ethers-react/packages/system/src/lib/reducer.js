import {
  ENABLE_REQUEST,
  ENABLE_SUCCESS,
  ENABLE_FAILURE,
  SET_PROVIDER,
  SET_PROVIDER_MULTIPLE,
  SET_PROVIDER_STATUS,
  WALLET_SIGN_TYPED_MESSAGE_REQUEST,
  WALLET_SIGN_MESSAGE_REQUEST,
  INIT_CONTRACT_REQUEST,
  CONTRACT_INITIALIZE_REQUEST,
  CONTRACT_INITIALIZE_SUCCESS,
  CONTRACT_INITIALIZE_FAILURE,
  CONTRACT_DEPLOY_REQUEST,
  CONTRACT_DEPLOY_SUCCESS,
  CONTRACT_DEPLOY_FAILURE,
  CONTRACT_DEPLOY_FROM_BYTECODE_REQUEST,
  CONTRACT_DEPLOY_FROM_BYTECODE_SUCCESS,
  CONTRACT_DEPLOY_FROM_BYTECODE_FAILURE,
  BALANCE_SET,
  NONCE_SET,
  NETWORK_SET,
  ENS_ADDRESS_SET,
  WALLET_PROVIDER_GET_REQUEST,
  WALLET_PROVIDER_GET_SUCCESS,
  WALLET_PROVIDER_GET_FAILURE,
  WALLET_SEND_TRANSACTION_REQUEST,
  WALLET_SEND_TRANSACTION_SUCCESS,
  WALLET_SEND_TRANSACTION_FAILURE,
  SIGNER_GET_REQUEST,
  SIGNER_GET_SUCCESS,
  SIGNER_GET_FAILURE,
  SET_WALLET,
  SET_WALLET_FAILURE,
  SET_ADDRESS,
  TRANSACTION_MONITOR_REQUEST,
  TRANSACTION_MONITOR_SUCCESS,
  TRANSACTION_MONITOR_FAILURE,
  CONTRACT_DEPLOY_MONITOR_SUCCESS,
  CONTRACT_DEPLOY_MONITOR_FAILURE
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
    case SET_PROVIDER:
      return {
        ...state,
        provider: payload
      };
    case SET_PROVIDER_MULTIPLE:
      return {
        ...state,
        providers: payload
      };
    case SET_PROVIDER_STATUS:
      return {
        ...state,
        providerStatus: payload
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: payload
      };

    case BALANCE_SET:
      return {
        ...state,
        balance: payload
      };
    case NONCE_SET:
      return {
        ...state,
        nonce: payload
      };
    case NETWORK_SET:
      return {
        ...state,
        network: payload
      };
    case ENS_ADDRESS_SET:
      return {
        ...state,
        ensAddress: payload
      };

    /* ----------------------- */
    /*         Signer          */
    /* ----------------------- */
    case SIGNER_GET_REQUEST:
      return {
        ...state
      };
    case SIGNER_GET_SUCCESS:
      return {
        ...state,
        wallet: payload
      };
    case SIGNER_GET_FAILURE:
      return {
        ...state,
        wallet: false
      };
    /* ----------------------- */
    /*         Wallet          */
    /* ----------------------- */
    case WALLET_PROVIDER_GET_SUCCESS:
      return {
        ...state,
        injected: payload
      };
    case SET_WALLET:
      return {
        ...state
        // wallet: payload.wallet
      };
    case SET_WALLET_FAILURE:
      return {
        ...state
        // wallet: error
      };
    case WALLET_SEND_TRANSACTION_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          transactions: [
            ...state.requests.transactions,
            {
              ...action
            }
          ]
        }
      };
    case WALLET_SEND_TRANSACTION_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          transactions: []
        },
        activity: {
          ...state.activity,
          transactions: {
            ...state.activity.transactions,
            [action.payload.hash]: {
              status: TRANSACTION_SUBMITTED,
              payload: action.payload
            }
          }
        }
      };
    case TRANSACTION_MONITOR_SUCCESS:
      return {
        ...state,
        activity: {
          ...state.activity,
          transactions: {
            ...state.activity.transactions,
            [action.payload.transactionHash]: {
              ...state.activity.transactions[action.payload.transactionHash],
              status: TRANSACTION_COMPLETE,
              complete: action.payload
            }
          }
        }
      };
    case WALLET_SEND_TRANSACTION_FAILURE:
      return {
        ...state,
        requests: {
          ...state.requests,
          transactions: [],
          activity: [
            ...state.activity,
            {
              status: TRANSACTION_REJECTED,
              payload: action.payload
            }
          ]
        }
      };
    case TRANSACTION_MONITOR_FAILURE:
      return {
        ...state,
        activity: {
          transactions: [
            ...state.activity.transactions,
            {
              ...state.activity.transactions[action.payload.transactionHash],
              status: TRANSACTION_REJECTED,
              error: action.payload
            }
          ]
        }
      };
    case WALLET_SIGN_TYPED_MESSAGE_REQUEST:
      return {
        ...state,
        store: {
          ...state.store,
          messages: [
            ...state.store.messages,
            {
              ...action
            }
          ]
        }
      };
    case WALLET_SIGN_MESSAGE_REQUEST:
      return {
        ...state,
        messages: {
          [id]: payload
        }
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

    /* ----------------------- */
    /* Contract Deployment     */
    /* ----------------------- */
    case CONTRACT_DEPLOY_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          deploy: [
            ...state.requests.deploy,
            {
              payload
            }
          ]
        }
      };
    case CONTRACT_DEPLOY_SUCCESS:
      return {
        ...state,
        activity: {
          ...state.activity,
          deploy: {
            ...state.activity.deploy,
            [action.payload.hash]: {
              status: CONTRACT_DEPLOY_SUBMITTED,
              payload: action.payload
            }
          }
        }
      };
    case CONTRACT_DEPLOY_MONITOR_SUCCESS:
      return {
        ...state,
        activity: {
          ...state.activity,
          deploy: {
            ...state.activity.deploy,
            [action.payload.transactionHash]: {
              ...state.activity.deploy[action.payload.transactionHash],
              status: CONTRACT_DEPLOY_COMPLETE,
              complete: action.payload
            }
          }
        }
      };
    case CONTRACT_DEPLOY_FAILURE:
      return {
        ...state,
        activity: {
          ...state.store,
          deploy: {
            ...state.activity.deploy,
            [action.payload.hash]: {
              status: CONTRACT_DEPLOY_FAILURE,
              payload: action.payload
            }
          }
        }
      };

    case CONTRACT_DEPLOY_MONITOR_FAILURE:
      return {
        ...state,
        activity: {
          deploy: [
            ...state.activity.deploy,
            {
              ...state.activity.deploy[action.payload.transactionHash],
              status: CONTRACT_DEPLOY_REJECTED,
              error: action.payload
            }
          ]
        }
      };

    default:
      return state;
  }
};

export default reducerActions;
