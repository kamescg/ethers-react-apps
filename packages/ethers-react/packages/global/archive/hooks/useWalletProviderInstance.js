import { ethers } from 'ethers';
/**
 * @function useWalletProviderInstance
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from 'react';
import {
  WALLET_PROVIDER_GET_SUCCESS,
  WALLET_PROVIDER_GET_FAILURE
} from '../types';

/* --- Effect --- */
export const useWalletProviderInstance = (state, dispatch) => {
  useEffect(() => {
    const runEffect = async () => {
      if (window.web3 && window.web3.currentProvider) {
        const provider = window.web3.currentProvider;
        dispatch({
          type: WALLET_PROVIDER_GET_SUCCESS,
          payload: provider
        });
      } else {
        dispatch({
          type: WALLET_PROVIDER_GET_FAILURE,
          payload: undefined
        });
      }
    };
    runEffect();
  }, [state.wallet]);

  return true;
};
