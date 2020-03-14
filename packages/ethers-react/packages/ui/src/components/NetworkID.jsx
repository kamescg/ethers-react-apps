/* --- Global --- */
import React from "react";
import { withEthers } from "@ethers-react/system";
import { Span } from "@horizin/atoms";

/* ---  Component --- */
export const NetworkID = ({ sx }) => {
  const ethers = withEthers();
  return ethers.network && ethers.network.name ? (
    <Span sx={sx}>{ethers.network.chainId}</Span>
  ) : (
    <Span sx={sx}>Network Undefined</Span>
  );
};
