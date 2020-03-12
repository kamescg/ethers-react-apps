/**
 * @function useSelectContractByName
 */

/* --- Global --- */
import { useState, useEffect } from "react";
import { withEthers } from "@ethers-react/system";

/* --- useSelectContractByName : Effect --- */
export const useSelectContractByName = name => {
  /* --- Application : State --- */
  const ethers = withEthers();

  /* --- Component : State --- */
  const [contract, setContract] = useState(undefined);
  const [isFound, setIsFound] = useState();

  useEffect(() => {
    if (ethers.contracts) {
      const contract = Object.keys(ethers.contracts).filter(
        contract => ethers.contracts[contract].name === name
      );
      if (contract.length > 0) {
        setContract(ethers.contracts[contract[0]]);
        setIsFound(true);
      } else {
        setIsFound(false);
      }
    }
  }, [ethers.contracts]);

  return {
    contract,
    isFound
  };
};
