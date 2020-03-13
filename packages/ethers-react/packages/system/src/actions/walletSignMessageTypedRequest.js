import { hashCode } from "../lib/utilities";
import { WALLET_SIGN_TYPED_MESSAGE_REQUEST } from "../lib/types";
export const walletSignMessageTypedRequest = (state, dispatch) => ({
  message,
  delta
}) =>
  dispatch({
    type: WALLET_SIGN_TYPED_MESSAGE_REQUEST,
    payload: message,
    id: delta || hashCode(message.toString())
  });
