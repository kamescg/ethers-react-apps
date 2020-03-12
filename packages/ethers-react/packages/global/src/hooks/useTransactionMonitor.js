/**
 * @function useTransactionMonitor
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from 'react';

/* --- Local --- */
import {
  TRANSACTION_MONITOR_SUCCESS,
  TRANSACTION_MONITOR_FAILURE
} from '../types';

import { TRANSACTION_SUBMITTED } from '../transactionStatus';

/* --- Effect --- */
export const useTransactionMonitor = (state, dispatch) => {
  useEffect(() => {
    if (filterTransaction(state.activity.transactions)) {
      const txWatch = filterTransaction(state.activity.transactions);
      const runEffect = async () => {
        const transactionRequest = Object.keys(
          state.activity.transactions
        ).filter(
          tx => state.activity.transactions[tx].status === TRANSACTION_SUBMITTED
        )[0];
        const transactionConfirmation = await state.wallet.provider.waitForTransaction(
          state.activity.transactions[transactionRequest].payload.hash
        );
        try {
          dispatch({
            type: TRANSACTION_MONITOR_SUCCESS,
            payload: transactionConfirmation
          });
        } catch (error) {
          dispatch({
            type: TRANSACTION_MONITOR_FAILURE,
            payload: error
          });
        }
      };
      runEffect();
    }
  }, [state.activity.transactions]);
};

const filterTransaction = txList =>
  Object.keys(txList).filter(tx => txList[tx].status === TRANSACTION_SUBMITTED)
    .length > 0
    ? true
    : false;
