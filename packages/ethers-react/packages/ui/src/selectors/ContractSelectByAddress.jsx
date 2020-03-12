/* --- Global --- */
import React from "react";
import { selectors } from "@ethers-react/system";
import { Span } from "@horizin/atoms";
import { ContractDeployed, ContractFactory } from "@ethers-react/ui";

/* ---  Component --- */
export const ContractSelectByAddress = ({ contractAddress }) => {
  const contractSelection = selectors.useSelectContractByAddress(
    contractAddress
  );

  return !contractSelection.isFound ? (
    <Span>No Contract Found</Span>
  ) : contractSelection.contract.type === "deployed" ? (
    <ContractDeployed {...contractSelection.contract} />
  ) : (
    <ContractFactory {...contractSelection.contract} />
  );
};
