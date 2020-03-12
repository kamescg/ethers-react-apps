/**
 * @function useSignerGet
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect, useState } from "react";

/* --- Local --- */
import { SET_PROVIDER, SET_PROVIDER_STATUS } from "../types";

/* --- Effect --- */
export const useWalletProviderInitialize = (state, dispatch) => {
  const [providerInitialize, setProviderInitialize] = useState(false);
  useEffect(() => {
    if (state.address && !providerInitialize) {
      (async () => {
        try {
          const provider = await new state.instance.providers.Web3Provider(
            window.web3.currentProvider
          );

          dispatch({
            type: SET_PROVIDER,
            payload: provider
          });
          setProviderInitialize(true);
        } catch (error) {
          dispatch({
            type: SET_PROVIDER_STATUS,
            payload: undefined
          });
        }
      })();
    }
  }, [state.address, providerInitialize]);

  return true;
};
