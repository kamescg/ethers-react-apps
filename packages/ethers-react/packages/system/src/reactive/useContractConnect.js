/**
 * @function useContractConnect
 * @description Initialize Contracts
 */

/* --- Global --- */
import { useState, useEffect } from "react";
import { ethers } from "@ethers-react/system";

/* --- Local --- */
import { CONTRACT_INITIALIZE_SUCCESS } from "../lib/types";

/* --- Effect --- */
export const useContractConnect = (state, dispatch) => {
  const [, set] = useState();

  /* --- Error : State --- */
  const [error, setError] = useState();

  /* --- Initialize --- */
  const init = () => {};

  /* --- Sign Message :: Effect --- */
  useEffect(() => {
    if (state.contracts && state.wallet) {
      const runEffect = async () => {
        try {
          Object.keys(state.contracts)
            .filter(contractId => {
              return state.contracts[contractId].address;
            })
            .forEach(contractId => {
              const contract = new ethers.Contract(
                state.contracts[contractId].address,
                state.contracts[contractId].abi,
                state.wallet
              );
              dispatch({
                payload: contract,
                id: state.contracts[contractId].address,
                type: CONTRACT_INITIALIZE_SUCCESS
              });
            });
        } catch (error) {
          setError(error);
        }
      };
      runEffect();
    }
  }, [state.wallet]);

  /* --- Return : Complete --- */
  return {
    init,
    error: error
  };
};
