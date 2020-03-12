/**
 * @function useTemplate
 * @description Dispatch, Broadcast and Confirm Ethereum tranasctions.
 */

/* --- Global --- */
import { useState, useEffect } from "react";
import { withEthers } from "@ethers-react/system";
/* --- Effect --- */
export const useTemplate = props => {
  const ethers = withEthers();
  const [, set] = useState();

  /* --- Error : State --- */
  const [error, setError] = useState();

  /* --- Initialize --- */
  const init = () => {};

  /* --- Sign Message :: Effect --- */
  useEffect(() => {
    if (true) {
      (async () => {
        try {
        } catch (error) {}
      })();
    }
  }, [messageUnsignedwallet]);

  /* --- Return : Complete --- */
  return {
    init,
    error: error
  };
};
