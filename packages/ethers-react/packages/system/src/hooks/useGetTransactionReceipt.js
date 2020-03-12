/**
 * @function useGetTransactionReceipt
 * @description Get transaction receipt data.
 */

/* --- Global --- */
import { useState, useEffect } from "react";
import { withEthers } from "@ethers-react/system";
/* --- Effect --- */
export const useGetTransactionReceipt = props => {
  const ethers = withEthers();
  const [transactionHash, setTransactionHash] = useState();
  const [transactionReceipt, setTransactionReceipt] = useState();
  const [transactionReceiptError, setTransactionReceiptError] = useState();

  /* --- Error : State --- */
  const [error, setError] = useState();

  /* --- Initialize --- */
  const init = txHash => {
    setTransactionHash(txHash);
  };

  /* --- Sign Message :: Effect --- */
  useEffect(() => {
    if (true) {
      (async () => {
        try {
          const txReceipt = await ethers.provider.getTransactionReceipt(
            transactionHash
          );
          console.log(txReceipt);
          setTransactionData(txReceipt);
        } catch (error) {
          setTransactionReceiptError(error);
        }
      })();
    }
  }, []);

  /* --- Return : Complete --- */
  return {
    init,
    transactionHash,
    transactionReceipt,
    error: transactionReceiptError
  };
};
