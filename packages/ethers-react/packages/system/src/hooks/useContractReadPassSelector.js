/**
 * @function useWalletSendTransaction
 * @description Dispatch, Broadcast and Confirm Ethereum tranasctions.
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Module --- */
import withEthers from "../withContext";

/* --- useContractRead : Effect --- */
export const useContractReadPassSelector = () => {
  /* ------------------- */
  // State
  /* ------------------- */

  /* --- Global : State --- */
  const ethersProvider = withEthers();

  /* --- Local : State --- */

  /* --- Contract : States --- */
  const [contract, setContractAPI] = useState();
  const [contractFunction, setContractFunction] = useState();
  const [contractInput, setContractInput] = useState();

  /* --- Transaction : States --- */
  const [contractReadData, setContractReadData] = useState(undefined);

  /* --- Error : States --- */
  const [transactionBroadcastError, setTransactionBroadcastError] = useState(
    undefined
  );

  /* --- Boolean : States --- */
  const [isContractReadData, setIsContractRead] = useState(false);

  /* ------------------- */
  // Actions
  /* ------------------- */

  /* --- read : Action --- */
  const read = (func, values) => {
    // Values
    setContractReadData(undefined);
    setIsContractRead(undefined);
    setTransactionBroadcastError(undefined);

    // Contract
    setContractInput(values);
    setContractFunction(func);
  };

  const setContract = contract => {
    setContractAPI(contract);
  };

  useEffect(() => {});

  /* ------------------- */
  // Effects
  /* ------------------- */

  /* --- Broadcast Transaction :: Effect --- */
  useEffect(() => {
    if (contractFunction && contractInput && !isContractReadData) {
      (async () => {
        try {
          console.log(isContractReadData, "isContractReadData");
          const contractReadData = await contract[contractFunction](
            ...contractInput
          );
          console.log(contractReadData, "contractReadData sttf");
          setIsContractRead(true);
          setContractReadData(contractReadData);
        } catch (error) {
          console.log(error);
          setTransactionBroadcastError(error);
        }
      })();
    }
  }, [contractFunction, contractInput]);

  return {
    read,
    setContract,
    input: contractInput,
    data: contractReadData,
    err: transactionBroadcastError,
    isContractReadData
  };
};
