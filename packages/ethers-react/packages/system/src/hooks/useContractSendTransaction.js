/**
 * @function useWalletSendTransaction
 * @description Dispatch, Broadcast and Confirm Ethereum tranasctions.
 */

/* --- Global --- */
import { useState, useEffect } from "react";
import { selectors } from "@ethers-react/system";

/* --- Module --- */
import withEthers from "../withContext";

/* --- Effect --- */
export const useContractSendTransaction = contractName => {
  /* ------------------- */
  // State
  /* ------------------- */

  /* --- Global : State --- */
  const ethersProvider = withEthers();

  /* --- Contract : States --- */
  const [contractNamePassed, setContractNamePassed] = useState(contractName);
  const [contractFunction, setContractFunction] = useState();
  const [contractCallValues, setContractCallValues] = useState();

  /* --- Transaction : States --- */
  const [params, setParams] = useState({});
  const [hash, setHash] = useState(undefined);
  const [broadcast, setBroadcast] = useState(undefined);
  const [receipt, setReceipt] = useState(undefined);

  /* --- Error : States --- */
  const [broadcastError, setTransactionBroadcastError] = useState(undefined);
  const [confirmedError, setTransactionConfirmedError] = useState(undefined);
  const [receiptStatus, setReceiptStatus] = useState();

  /* --- Boolean : States --- */
  const [isWaitingResponse, setIsWaitingResponse] = useState(false);
  const [isBroadcast, setIsBroadcast] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  /* ------------------- */
  // Hooks
  /* ------------------- */
  /* --- contractSelector : Hook --- */
  const contractSelector = selectors.useSelectContractByName(
    contractNamePassed
  );

  /* ------------------- */
  // Actions
  /* ------------------- */

  /* --- setContractName : Action --- */
  const setContractName = contractName => {
    setContractNamePassed(contractName);
  };

  /* --- sendTransaction : Action --- */
  const sendTransaction = ({ func, inputs, contractName, params }) => {
    // Reset : Transaction
    setReceiptStatus(undefined);
    setIsRejected(false);
    setIsWaitingResponse(true);
    setHash(undefined);

    // Broadcast : Transaction
    setBroadcast(undefined);
    setIsBroadcast(undefined);
    setTransactionBroadcastError(undefined);

    // Confirmed : Transaction
    setReceipt(undefined);
    setIsConfirmed(undefined);
    setTransactionConfirmedError(undefined);

    // Configuration : Transaction
    if (contractName) setContractNamePassed(contractName);
    if (params) setParams(params);
    setContractCallValues(inputs);
    setContractFunction(func);
  };

  /* ------------------- */
  // Effects
  /* ------------------- */
  /* --- Contract Send Transaction :: Effect --- */
  useEffect(() => {
    if (
      contractSelector.api &&
      contractFunction &&
      contractCallValues &&
      !hash
    ) {
      (async () => {
        try {
          const transactionBroadcast = await contractSelector.api[
            contractFunction
          ](...contractCallValues, params);

          setIsWaitingResponse(false);
          setIsBroadcast(true);
          setHash(transactionBroadcast.hash);
          setBroadcast(transactionBroadcast);
        } catch (error) {
          console.log(error);
          if (error.code === 4001) setIsRejected(true);
          setIsWaitingResponse(false);
          setTransactionBroadcastError(error);
        }
      })();
    }
  }, [contractSelector.api, contractFunction, contractCallValues]);

  /* --- Wait for Transaction : Effect --- */
  useEffect(() => {
    if (isBroadcast && hash) {
      (async () => {
        try {
          const receipt = await ethersProvider.wallet.provider.waitForTransaction(
            hash
          );
          setIsConfirmed(true);
          setReceipt(receipt);
          setReceiptStatus(receipt.status);
        } catch (error) {
          console.log(error, "waiting error");
          setTransactionConfirmedError(error);
        }
      })();
    }
  }, [isBroadcast, hash]);

  /* ------------------- */
  // Debugging
  /* ------------------- */
  /* --- contractSelector : Debug --- */
  useEffect(() => {
    // console.log(contractSelector, "selector useContractSendTransaction");
  }, [contractSelector]);

  /* ------------------- */
  // State : Hook : Return
  /* ------------------- */
  return {
    sendTransaction,
    setContractName,
    hash: hash,
    broadcast,
    broadcastError,
    receipt,
    receiptStatus,
    confirmedError,
    // Boolean States
    isBroadcast,
    isConfirmed,
    isRejected,
    isWaitingResponse,
    // State from Contract Selectr
    isContractConnected: contractSelector.isConnected,
    isContractFound: contractSelector.isFound
  };
};
