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
export const useAccountOnChange = (state, dispatch) => {
  const [address, setAddress] = useState(undefined);

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
    if (window.ethereum) {
      window.ethereum.on("networkChanged", function(networkId) {});
    }
  }, []);

  return true;
};
