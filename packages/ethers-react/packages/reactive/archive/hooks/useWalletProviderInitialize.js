/**
 * @function useSignerGet
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect, useState } from "react";

/* --- Local --- */
import { PROVIDER_SET, PROVIDER_SET_STATUS } from "../types";

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
            type: PROVIDER_SET,
            payload: provider
          });
          setProviderInitialize(true);
        } catch (error) {
          dispatch({
            type: PROVIDER_SET_STATUS,
            payload: undefined
          });
        }
      })();
    }
  }, [state.address, providerInitialize]);

  return true;
};
