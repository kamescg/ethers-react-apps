/* --- Global --- */
import { useEffect, useState } from "react";
import { hooks, selectors } from "@ethers-react/system";

/* --- TokenBalance : Component --- */
export const TokenBalance = ({ address, contractName, ...props }) => {
  /* ------------------- */
  // State
  /* ------------------- */
  /* --- Local : State --- */
  const [balance, setBalance] = useState();
  const [init, setInit] = useState(false);

  /* --- Hooks : State --- */
  const contractRead = hooks.useContractRead();

  /* ------------------- */
  // Effets
  /* ------------------- */
  /* --- Select Contract : Effect --- */
  useEffect(() => {
    setInit(true);
    contractRead.read({
      contractName,
      func: "balanceOf",
      inputs: [address]
    });
  }, [address]);

  useEffect(() => {
    if (contractRead.data) setBalance(contractRead.data.toString());
  }, [contractRead]);

  useEffect(() => {});
  return (
    <Atom.Flex>
      <Atom.Span>
        <strong>Balance: {balance} </strong>
      </Atom.Span>
    </Atom.Flex>
  );
};
