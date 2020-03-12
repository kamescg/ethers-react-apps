/**
 * @function useWalletSignerGet
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from "react";

/* --- Local --- */
import { SIGNER_GET_SUCCESS, SIGNER_GET_FAILURE } from "../types";

/* --- Effect --- */
export const useWalletSignerGet = (state, dispatch) => {
  useEffect(() => {
    (async () => {
      if (state.address && state.provider) {
        const signer = await state.provider.getSigner(state.address);
        dispatch({
          type: SIGNER_GET_SUCCESS,
          payload: signer
        });
      } else {
        dispatch({
          type: SIGNER_GET_FAILURE,
          payload: undefined
        });
      }
    })();
  }, [state.provider, state.address]);

  return true;
};
