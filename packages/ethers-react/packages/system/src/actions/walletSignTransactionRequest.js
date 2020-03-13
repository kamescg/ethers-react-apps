import { WALLET_SIGN_TRANSACTION_REQUEST } from "../lib/types";
export const walletSignTransactionRequest = (
  state,
  dispatch
) => transaction => {
  dispatch({
    type: WALLET_SIGN_TRANSACTION_REQUEST,
    payload: transaction
  });
};
