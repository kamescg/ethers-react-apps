/* --- Global --- */
import React, { useEffect } from "react";
import { selectors, hooks, helpers } from "@ethers-react/system";
import { Flex, Box, Heading, HorizontalRule, Span } from "@horizin/atoms";
import { ContractDeployed, ContractFactory } from "@ethers-react/ui";

/* ---  Component --- */
export const ContractSelectByName = ({ contractName }) => {
  const contractSelection = selectors.useSelectContractByName(contractName);

  console.log(
    contractSelection,
    "contractSelectioncontractSelectioncontractSelection"
  );
  return !contractSelection.isFound ? (
    <Span>No Contract Found</Span>
  ) : contractSelection.contract.type === "deployed" ? (
    <ContractDeployed {...contractSelection.contract} />
  ) : (
    <ContractFactory {...contractSelection.contract} />
  );
};
