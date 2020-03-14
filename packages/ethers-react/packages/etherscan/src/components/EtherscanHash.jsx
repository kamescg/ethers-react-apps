/* --- Global --- */
import React from "react";
import { withEthers } from "@ethers-react/system";
import { ConfirmationIcon } from "@ethers-react/ui";
import { Span } from "@horizin/atoms";

/* --- EtherscanHash : Component --- */
export const EtherscanHash = ({
  children,
  hash,
  sx,
  iconLoading,
  attr,
  ...props
}) => {
  const ethersProvider = withEthers();
  return !ethersProvider.network ? null : (
    <Span {...attr} {...props} sx={sx}>
      {iconLoading && <ConfirmationIcon />}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://${
          ethersProvider.network && ethersProvider.network.name === "mainnet"
            ? ""
            : `${ethersProvider.network.name}.`
        }etherscan.io/tx/${hash}`}
      >
        {children}
      </a>
    </Span>
  );
};
