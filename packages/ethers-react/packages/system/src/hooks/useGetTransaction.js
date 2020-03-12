/**
 * @function useGetTransaction
 * @description Get transaction data.
 */

/* --- Global --- */
import { useState, useEffect } from "react";
import { withEthers } from "@ethers-react/system";
/* --- Effect --- */
export const useGetTransaction = txHash => {
  /* --- Application : State --- */
  const ethers = withEthers();

  /* --- Component : State --- */
  const [transactionHash, setTransactionHash] = useState(txHash);
  const [transactionData, setTransactionData] = useState();

  /* --- Error : State --- */
  const [error, setError] = useState();

  /* --- Initialize --- */
  const init = txHash => {
    if (txHash) setTransactionHash(txHash);
  };

  /* --- Sign Message :: Effect --- */
  useEffect(() => {
    if (ethers.provider && transactionHash) {
      (async () => {
        try {
          const txData = await ethers.provider.getTransaction(transactionHash);
          setTransactionData(txData);
        } catch (error) {
          setError(error);
        }
      })();
    }
  }, [ethers.provider, transactionHash]);

  /* --- Return : Complete --- */
  return {
    init,
    error,
    transactionData,
    transactionHash
  };
};
