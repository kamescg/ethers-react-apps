/**
 * @function useWalletSendTransaction
 * @description Dispatch, Broadcast and Confirm Ethereum tranasctions.
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Module --- */
import withEthers from "../withContext";

/* --- Effect --- */
export const useContractSendTransaction = () => {
  /* ------------------- */
  // State
  /* ------------------- */

  /* --- Global : State --- */
  const ethersProvider = withEthers();

  /* --- Local : State --- */
  const [isWaitingResponse, setIsWaitingResponse] = useState(false);

  /* --- Contract : States --- */
  const [contract, setContractAPI] = useState();
  const [contractFunction, setContractFunction] = useState();
  const [contractCallValues, setContractCallValues] = useState();

  /* --- Transaction : States --- */
  const [transactionHash, setTransactionHash] = useState(undefined);
  const [transactionBroadcast, setTransactionBroadcast] = useState(undefined);
  const [transactionConfirmed, setTransactionConfirmed] = useState(undefined);

  /* --- Error : States --- */
  const [transactionBroadcastError, setTransactionBroadcastError] = useState(
    undefined
  );
  const [transactionConfirmedError, setTransactionConfirmedError] = useState(
    undefined
  );

  /* --- Boolean : States --- */
  const [isTransactionBroadcast, setIsTransactionBroadcast] = useState(false);
  const [isTransactionConfirmed, setIsTransactionConfirmed] = useState(false);

  /* ------------------- */
  // Actions
  /* ------------------- */

  /* --- sendTransaction : Action --- */
  const sendTransaction = (func, values) => {
    setTransactionHash(undefined);
    // Broadcast : Transaction
    setTransactionBroadcast(undefined);
    setIsTransactionBroadcast(undefined);
    setTransactionBroadcastError(undefined);
    // Confirmed : Transaction
    setTransactionConfirmed(undefined);
    setIsTransactionConfirmed(undefined);
    setTransactionConfirmedError(undefined);
    setIsWaitingResponse(true);
    setContractCallValues(values);
    setContractFunction(func);
  };

  const setContract = contract => {
    setContractAPI(contract);
  };

  /* ------------------- */
  // Effects
  /* ------------------- */

  /* --- Broadcast Transaction :: Effect --- */
  useEffect(() => {
    if (contractFunction && contractCallValues && !isTransactionBroadcast) {
      (async () => {
        try {
          // const transactionBroadcast = await ethersProvider.wallet.sendTransaction(
          //   transaction
          // );
          const transactionBroadcast = await contract[contractFunction](
            ...contractCallValues,
            {
              gasLimit: 100000
            }
          );
          setIsWaitingResponse(false);
          setIsTransactionBroadcast(true);
          setTransactionHash(transactionBroadcast.hash);
          setTransactionBroadcast(transactionBroadcast);
        } catch (error) {
          console.log(error);
          setIsWaitingResponse(false);
          setTransactionBroadcastError(error);
        }
      })();
    }
  }, [contractFunction, contractCallValues]);

  /* --- Wait for Transaction : Effect --- */
  useEffect(() => {
    if (isTransactionBroadcast && transactionHash) {
      (async () => {
        try {
          const transactionConfirmed = await ethersProvider.wallet.provider.waitForTransaction(
            transactionHash
          );
          setIsTransactionConfirmed(true);
          setTransactionConfirmed(transactionConfirmed);
        } catch (error) {
          setTransactionConfirmedError(error);
        }
      })();
    }
  }, [isTransactionBroadcast, transactionHash]);

  return {
    sendTransaction,
    setContract,
    hash: transactionHash,
    broadcast: transactionBroadcast,
    broadcastError: transactionBroadcastError,
    confirmed: transactionConfirmed,
    confirmedError: transactionConfirmedError,
    isBroadcast: isTransactionBroadcast,
    isConfirmed: isTransactionConfirmed,
    isWaitingResponse: isWaitingResponse
  };
};
