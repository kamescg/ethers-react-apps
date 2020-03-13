/**
 * @function useAccountBalance
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useEffect } from "react";
import { utils } from "ethers";
/* --- Local --- */
import { BALANCE_SET } from "../types";

/* --- Effect --- */
export const useAccountBalance = (state, dispatch) => {
  useEffect(() => {
    if (state.reactive.getAccountBalance && state.address && state.wallet) {
      (async () => {
        try {
          const balance = await state.wallet.getBalance();
          dispatch({
            payload: {
              bigNumber: balance,
              wei: balance.toString(),
              eth: utils.formatEther(balance),
              trimmed: utils.formatEther(balance).substring(0, 5)
            },
            type: BALANCE_SET
          });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [state.wallet, state.address]);

  return true;
};
