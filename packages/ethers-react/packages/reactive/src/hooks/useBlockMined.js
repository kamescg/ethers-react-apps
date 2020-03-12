/**
 * @function useAddressSet
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect, useState } from "react";

/* --- Local --- */
import { SET_ADDRESS } from "../types";

/* --- Effect --- */
export const useBlockMined = (state, dispatch) => {
  const [address] = useState(undefined);

  /* --- Set Address : Effect --- */
  useEffect(() => {
    if (state.address !== address) {
      (async () => {
        try {
          if (address) {
            dispatch({
              payload: address,
              type: SET_ADDRESS
            });
          }
        } catch (error) {
          // TODO(@kames) handle errors
        }
      })();
    }
  }, [address]);

  /* --- Account Change : Listen Event --- */
  useEffect(() => {
    if (state.provider) {
      state.provider.on("block", block => {
        // console.log(block);
      });
    }
  }, [state.provider]);

  return true;
};
