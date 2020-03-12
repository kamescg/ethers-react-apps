import { WALLET_SEND_TRANSACTION_REQUEST } from '../types';
export const walletSendTransactionRequest = (
  state,
  dispatch
) => transaction => {
  dispatch({
    type: WALLET_SEND_TRANSACTION_REQUEST,
    payload: transaction
  });
};
