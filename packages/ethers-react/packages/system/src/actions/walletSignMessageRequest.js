import { hashCode } from '../utilities';
import { WALLET_SIGN_MESSAGE_REQUEST } from '../types';
export const walletSignMessageRequest = (state, dispatch) => ({
  message,
  delta
}) =>
  dispatch({
    type: WALLET_SIGN_MESSAGE_REQUEST,
    payload: message,
    id: delta || hashCode(message)
  });
