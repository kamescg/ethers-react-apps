import {
  PROVIDER_SET,
  PROVIDER_SET_MULTIPLE,
  PROVIDER_SET_STATUS,
  BALANCE_SET,
  NONCE_SET,
  NETWORK_SET,
  ENS_ADDRESS_SET,
  SET_ADDRESS,
  BLOCK_CURRENT_SET,
  SIGNER_GET_SUCCESS,
  SIGNER_GET_FAILURE,
  INIT_CONTRACT_REQUEST,
  CONTRACT_INITIALIZE_SUCCESS,
  CONTRACT_DEPLOY_REQUEST
} from "./types";

const reducerActions = (state, action) => {
  switch (action.type) {
    case BLOCK_CURRENT_SET:
      return {
        ...state,
        currentBlock: action.payload
      };
    case PROVIDER_SET:
      return {
        ...state,
        provider: action.payload
      };
    case PROVIDER_SET_MULTIPLE:
      return {
        ...state,
        providers: action.payload
      };
    case PROVIDER_SET_STATUS:
      return {
        ...state,
        providerStatus: action.payload
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload
      };

    case BALANCE_SET:
      return {
        ...state,
        balance: action.payload
      };
    case NONCE_SET:
      return {
        ...state,
        nonce: action.payload
      };
    case NETWORK_SET:
      return {
        ...state,
        network: action.payload
      };
    case ENS_ADDRESS_SET:
      return {
        ...state,
        ensAddress: action.payload
      };

    case SIGNER_GET_SUCCESS:
      return {
        ...state,
        wallet: action.payload
      };
    case SIGNER_GET_FAILURE:
      return {
        ...state,
        wallet: false
      };

    case CONTRACT_INITIALIZE_SUCCESS:
      return {
        ...state,
        contracts: {
          ...state.contracts,
          [action.id]: {
            api: action.payload,
            ...state.contracts[action.payload.address]
          },
          ...state.contacts
        }
      };

    case INIT_CONTRACT_REQUEST:
      const { address, contract } = action.payload;
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
              action
            }
          ]
        }
      };

    default:
      return state;
  }
};

export default reducerActions;
