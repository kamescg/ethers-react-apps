/**
 * @function useAccountNonce
 */

/* --- Global --- */
import { useEffect } from "react";

/* --- Local --- */
import { NONCE_SET } from "../types";

/* --- Effect --- */
export const useAccountNonce = (state, dispatch) => {
  useEffect(() => {
    if (state.reactive.getAccountNonce && state.address && state.wallet) {
      (async () => {
        try {
          const nonce = await state.wallet.getTransactionCount();
          dispatch({
            payload: nonce,
            type: NONCE_SET
          });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [state.address, state.wallet]);
};
