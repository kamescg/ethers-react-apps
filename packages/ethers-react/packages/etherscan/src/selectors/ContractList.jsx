/* --- Global --- */
import React, { useEffect } from "react";
import { selectors, hooks, helpers } from "@ethers-react/system";
import { Flex, Box, Heading, HorizontalRule, Span } from "@horizin/atoms";

/* --- Global --- */
import { ContractDeployed, ContractFactory } from "@ethers-react/ui";
/* ---  Component --- */
export const ContractList = ({ sx }) => {
  const contractListSelector = selectors.useSelectContractList();

  return !contractListSelector.list ? null : (
    <Box>
      {Object.keys(contractListSelector.list).map(contract =>
        contractListSelector.list[contract].type === "deployed" ? (
          <ContractDeployed {...contractListSelector.list[contract]} />
        ) : (
          <ContractFactory
            name={contract}
            type={contractListSelector.list[contract].type}
          />
        )
      )}
    </Box>
  );
};
