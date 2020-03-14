/**
 * @function useWalletSignerGet
 */

/* --- Global --- */
import { useEffect } from "react";
/* --- Local --- */
import { NETWORK_SET } from "../types";

/* --- Effect --- */
export const useWalletNetwork = (state, dispatch) => {
  useEffect(() => {
    if (state.reactive.getWalletNetwork && state.provider && !state.address) {
      (async () => {
        try {
          const network = await state.provider.getNetwork();
          dispatch({
            payload: network,
            type: NETWORK_SET
          });
        } catch (error) {}
      })();
    }
  }, [state.provider, state.address]);

  return true;
};
