/**
 * @function useWalletSendTransaction
 * @description Dispatch, Broadcast and Confirm Ethereum tranasctions.
 */

/* --- Global --- */
import { useState, useEffect } from "react";
import { selectors } from "@ethers-react/system";

/* --- useContractRead : Effect --- */
export const useContractRead = contractName => {
  /* ------------------- */
  // State
  /* ------------------- */
  const [contractNamePassed, setContractNamePassed] = useState(contractName);

  /* --- Global : State --- */

  /* --- Local : State --- */
  const contractSelector = selectors.useSelectContractByName(
    contractNamePassed
  );

  /* --- Contract : States --- */
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
  const read = ({ func, inputs, contractName }) => {
    // Values
    setContractReadData(undefined);
    setIsContractRead(undefined);
    setTransactionBroadcastError(undefined);

    // Contract
    setContractInput(inputs);
    setContractFunction(func);
    if (contractName) setContractNamePassed(contractName);
  };

  const setContractName = contractName => {
    setContractNamePassed(contractName);
  };

  useEffect(() => {
    // console.log(contractSelector, "read contractSelector");
  }, [contractSelector]);

  /* ------------------- */
  // Effects
  /* ------------------- */

  /* --- Contract Initialize :: Effect --- */
  useEffect(() => {
    if (
      contractSelector.api &&
      contractFunction &&
      contractInput &&
      !isContractReadData
    ) {
      (async () => {
        try {
          const contractReadData = await contractSelector.api[contractFunction](
            ...contractInput
          );
          setIsContractRead(true);
          setContractReadData(contractReadData);
        } catch (error) {
          console.log(error);
          setTransactionBroadcastError(error);
        }
      })();
    }
  }, [contractSelector.api, contractFunction, contractInput]);

  return {
    read,
    setContractName,
    input: contractInput,
    data: contractReadData,
    err: transactionBroadcastError,
    isRead: isContractReadData,
    isError: isContractReadData ? true : false,
    isContractReadData
  };
};
