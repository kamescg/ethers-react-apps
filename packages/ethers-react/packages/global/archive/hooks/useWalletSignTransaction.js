/**
 * @function useWalletSignTransaction
 * @description Watch Browser window object for Etheruem selected address.
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from 'react';

/* --- Local --- */
import {
  WALLET_SIGN_TRANSACTION_SUCCESS,
  WALLET_SIGN_TRANSACTION_FAILURE
} from '../types';

/* --- Component --- */
export const useWalletSignTransaction = (state, dispatch) => {
  useEffect(() => {
    if (
      state.provider &&
      state.wallet &&
      state.store.transactions &&
      state.store.transactions.length > 0
    ) {
      const runEffect = async () => {
        const transaction = state.store.transactions[0];
        try {
          dispatch({
            type: WALLET_SIGN_TRANSACTION_SUCCESS,
            id: messageRequest.id,
            payload: signature
          });
          setResponse(true);
        } catch (error) {
          dispatch({
            type: WALLET_SIGN_TRANSACTION_FAILURE,
            id: messageRequest.id,
            payload: error
          });
          setResponse(false);
        }
      };
      runEffect();
    }
  }, [state.store.transactions]);
};
